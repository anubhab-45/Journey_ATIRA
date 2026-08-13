(() => {
    const STYLE = `
        .site-music-player{
            position:fixed;
            right:18px;
            bottom:18px;
            z-index:9998;
            width:min(380px,calc(100vw - 28px));
            display:flex;
            gap:10px;
            align-items:center;
            padding:12px 12px 18px;
            border:1px solid rgba(255,255,255,.12);
            border-radius:18px;
            background:rgba(13,6,18,.92);
            backdrop-filter:blur(18px);
            -webkit-backdrop-filter:blur(18px);
            color:#fff;
            box-shadow:0 18px 45px rgba(0,0,0,.35);
        }
        .site-music-cover{width:46px;height:46px;padding:0;border:0;border-radius:10px;overflow:hidden;background:#221326;flex:0 0 auto}
        .site-music-meta{min-width:0;flex:1;display:grid;gap:2px}
        .site-music-meta small{font-size:8px;letter-spacing:.16em;opacity:.55}
        .site-music-meta strong,.site-music-meta span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .site-music-meta strong{font-size:12px}
        .site-music-meta span{font-size:10px;opacity:.6}
        .site-music-player button{border:0;background:none;color:#fff;cursor:pointer;font-size:16px;padding:4px}
        .site-music-progress{position:absolute;left:64px;right:14px;bottom:5px;width:calc(100% - 78px);accent-color:#ff8fab}
        .site-music-active main,.site-music-active .site-footer{padding-bottom:120px}
        .site-music-active .back-to-top{bottom:112px}
        .timeline-card-date{display:none!important}
        @media(max-width:700px){
            .site-music-player{right:8px;bottom:8px;width:calc(100vw - 16px)}
            .site-music-active main,.site-music-active .site-footer{padding-bottom:108px}
            .site-music-active .back-to-top{bottom:104px}
        }
    `;

    if (!document.getElementById("siteMusicStyles")) {
        const style = document.createElement("style");
        style.id = "siteMusicStyles";
        style.textContent = STYLE;
        document.head.appendChild(style);
    }

    const songs = [
        ["Perfect", "Ed Sheeran", "Theme.mp3"],
        ["Until I Found You", "Stephen Sanchez", "Gallery.mp3"],
        ["Kesariya", "Arijit Singh", "Letteres.mp3"],
        ["Raataan Lambiyan", "Jubin Nautiyal", "Timeline.mp3"],
        ["Apna Bana Le", "Arijit Singh", "bonus.mp3"]
    ];

    const STORAGE_KEY = "atiraJourneyMusicState";
    const AUDIO_PATH = "assets/audio/";
    let index = 0;
    let audio = null;
    let progress = null;
    let playButton = null;

    const formatTime = (value) => {
        if (!Number.isFinite(value)) return "0:00";
        return `${Math.floor(value / 60)}:${Math.floor(value % 60).toString().padStart(2, "0")}`;
    };

    const saveState = () => {
        if (!audio) return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            index,
            currentTime: Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
            playing: !audio.paused
        }));
    };

    const readState = () => {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
            if (!saved || typeof saved !== "object") return null;
            return {
                index: Number.isInteger(saved.index) ? saved.index : 0,
                currentTime: Number.isFinite(saved.currentTime) ? saved.currentTime : 0,
                playing: Boolean(saved.playing)
            };
        } catch {
            return null;
        }
    };

    function createPlayer() {
        if (document.getElementById("siteMusicPlayer")) return;

        const player = document.createElement("aside");
        player.id = "siteMusicPlayer";
        player.className = "site-music-player";
        player.setAttribute("aria-label", "Our soundtrack player");
        player.innerHTML = `
            <button id="smPrev" type="button" aria-label="Previous track">⏮</button>
            <div class="site-music-meta">
                <small>OUR SOUNDTRACK</small>
                <strong id="smTitle">—</strong>
                <span id="smArtist">—</span>
            </div>
            <button id="smPlay" type="button" aria-label="Play or pause">▶</button>
            <button id="smNext" type="button" aria-label="Next track">⏭</button>
            <input id="smProgress" class="site-music-progress" type="range" min="0" max="100" value="0" aria-label="Track progress">
        `;
        document.body.appendChild(player);
        document.body.classList.add("site-music-active");

        const title = document.getElementById("smTitle");
        const artist = document.getElementById("smArtist");
        playButton = document.getElementById("smPlay");
        progress = document.getElementById("smProgress");
        audio = new Audio();
        audio.preload = "auto";

        const loadTrack = (nextIndex, attemptPlay = false, seekTo = 0) => {
            index = (nextIndex + songs.length) % songs.length;
            title.textContent = songs[index][0];
            artist.textContent = songs[index][1];
            audio.src = AUDIO_PATH + songs[index][2];
            audio.load();

            audio.addEventListener("loadedmetadata", () => {
                if (seekTo > 0 && seekTo < audio.duration) audio.currentTime = seekTo;
            }, { once: true });

            if (attemptPlay) audio.play().catch(() => {});
        };

        document.getElementById("smPrev").onclick = () => loadTrack(index - 1, true);
        document.getElementById("smNext").onclick = () => loadTrack(index + 1, true);
        playButton.onclick = () => audio.paused ? audio.play().catch(() => {}) : audio.pause();

        audio.addEventListener("play", () => {
            playButton.textContent = "⏸";
            playButton.setAttribute("aria-label", "Pause");
            saveState();
        });

        audio.addEventListener("pause", () => {
            playButton.textContent = "▶";
            playButton.setAttribute("aria-label", "Play");
            saveState();
        });

        audio.addEventListener("ended", () => loadTrack(index + 1, true));

        audio.addEventListener("timeupdate", () => {
            if (audio.duration) progress.value = (audio.currentTime / audio.duration) * 100;
        });

        progress.oninput = () => {
            if (audio.duration) audio.currentTime = (progress.value / 100) * audio.duration;
        };

        window.addEventListener("pagehide", saveState);
        window.addEventListener("beforeunload", saveState);

        const saved = readState();
        if (saved) {
            loadTrack(saved.index, false, saved.currentTime);
            if (saved.playing) {
                const tryResume = () => {
                    audio.play().catch(() => {
                        /* Browser may require a user gesture on a fresh page. */
                    });
                    window.removeEventListener("pointerdown", tryResume);
                    window.removeEventListener("keydown", tryResume);
                };
                window.addEventListener("pointerdown", tryResume, { once: true });
                window.addEventListener("keydown", tryResume, { once: true });
            }
        } else {
            loadTrack(0, false);
        }
    }

    function distributeMemories() {
        const page = (location.pathname.split("/").pop() || "index.html").replace(".html", "");
        if (page === "gallery" || !Array.isArray(window.memories)) return;

        const map = { index: 0, dashboard: 1, timeline: 3, letters: 4, about: 5, vault: 6 };
        const bucket = map[page];
        if (bucket === undefined) return;

        const items = window.memories
            .filter(item => item && item.type !== "video")
            .filter((_, n) => n % 7 === bucket);

        if (!items.length) return;

        const section = document.createElement("section");
        section.className = "memory-distribution";
        section.innerHTML = `
            <div class="container">
                <small>FROM OUR JOURNEY</small>
                <h2>A Few Moments, Kept Close</h2>
                <div class="memory-rail"></div>
            </div>
        `;

        const rail = section.querySelector(".memory-rail");
        items.forEach(memory => {
            const image = document.createElement("img");
            image.src = memory.src;
            image.alt = memory.title || "Memory";
            image.loading = "lazy";
            image.onclick = () => {
                const viewer = document.createElement("div");
                viewer.className = "memory-viewer";
                viewer.innerHTML = `<button type="button" aria-label="Close">×</button><img src="${memory.src}" alt="Memory">`;
                viewer.onclick = event => {
                    if (event.target === viewer || event.target.tagName === "BUTTON") viewer.remove();
                };
                document.body.appendChild(viewer);
            };
            rail.appendChild(image);
        });

        (document.querySelector("main") || document.body).appendChild(section);
    }

    function init() {
        createPlayer();
        if (Array.isArray(window.memories)) {
            distributeMemories();
        } else {
            const script = document.createElement("script");
            script.src = "data/memories.js";
            script.onload = distributeMemories;
            document.body.appendChild(script);
        }
    }

    document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", init, { once: true })
        : init();
})();