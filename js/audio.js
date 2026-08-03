/* =========================================
   ATIRA'S JOURNEY
   GLOBAL PAGE MUSIC SYSTEM
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const musicToggle = document.getElementById("musicToggle");
    const musicVolume = document.getElementById("musicVolume");
    const playerTitle = document.getElementById("playerTitle");
    const playerSubtitle = document.getElementById("playerSubtitle");

    if (!musicToggle) return;

    /* =========================================
       PAGE → SONG
    ========================================= */

    const pageMusic = {

        "index.html": {
            file: "Theme.mp3",
            title: "Our Theme",
            subtitle: "ATIRA'S JOURNEY"
        },

        "gallery.html": {
            file: "Gallery.mp3",
            title: "Gallery",
            subtitle: "Memories in Photographs"
        },

        "letters.html": {
            file: "Letteres.mp3",
            title: "Letters",
            subtitle: "Words From The Heart"
        },

        "timeline.html": {
            file: "Timeline.mp3",
            title: "Timeline",
            subtitle: "Our Journey Through Time"
        },

        "bonus.html": {
            file: "bonus.mp3",
            title: "Bonus",
            subtitle: "A Little Something Extra"
        }

    };


    /* =========================================
       DETECT CURRENT PAGE
    ========================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase() || "index.html";


    const selectedMusic =
        pageMusic[currentPage] || pageMusic["index.html"];


    /* =========================================
       CREATE AUDIO
    ========================================= */

    const audio = new Audio();

    audio.src = `audio/${selectedMusic.file}`;

    audio.loop = true;

    audio.volume = 0.20;

    audio.preload = "auto";


    /* =========================================
       PLAYER TEXT
    ========================================= */

    if (playerTitle) {
        playerTitle.textContent = selectedMusic.title;
    }

    if (playerSubtitle) {
        playerSubtitle.textContent = selectedMusic.subtitle;
    }


    /* =========================================
       PLAY BUTTON
    ========================================= */

    function playMusic() {

        audio.play()
            .then(() => {

                musicToggle.textContent = "Ⅱ";

            })
            .catch(() => {

                /*
                 Browser autoplay blocked.
                 First user interaction will start music.
                */

                musicToggle.textContent = "▶";

            });

    }


    function pauseMusic() {

        audio.pause();

        musicToggle.textContent = "▶";

    }


    musicToggle.addEventListener("click", () => {

        if (audio.paused) {

            playMusic();

        } else {

            pauseMusic();

        }

    });


    /* =========================================
       VOLUME
    ========================================= */

    if (musicVolume) {

        musicVolume.value = audio.volume;

        musicVolume.addEventListener("input", () => {

            audio.volume =
                Number(musicVolume.value);

        });

    }


    /* =========================================
       AUTOPLAY
    ========================================= */

    function startMusicAfterInteraction() {

        if (audio.paused) {

            playMusic();

        }

        document.removeEventListener(
            "click",
            startMusicAfterInteraction
        );

        document.removeEventListener(
            "touchstart",
            startMusicAfterInteraction
        );

        document.removeEventListener(
            "keydown",
            startMusicAfterInteraction
        );

    }


    /*
       Try immediately
    */

    playMusic();


    /*
       If browser blocks autoplay,
       first interaction starts it.
    */

    document.addEventListener(
        "click",
        startMusicAfterInteraction,
        { once: true }
    );

    document.addEventListener(
        "touchstart",
        startMusicAfterInteraction,
        { once: true }
    );

    document.addEventListener(
        "keydown",
        startMusicAfterInteraction,
        { once: true }
    );


});