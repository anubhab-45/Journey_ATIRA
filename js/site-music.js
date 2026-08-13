/* ATIRA'S JOURNEY — sitewide soundtrack */
(function(){
  'use strict';

  const songs = [
    {id:1,title:'Perfect',artist:'Ed Sheeran',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.50 PM.jpeg',audio:'assets/audio/Theme.mp3'},
    {id:2,title:'Until I Found You',artist:'Stephen Sanchez',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.51 PM.jpeg',audio:'assets/audio/Gallery.mp3'},
    {id:3,title:'Kesariya',artist:'Arijit Singh',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.52 PM.jpeg',audio:'assets/audio/Letteres.mp3'},
    {id:4,title:'Raataan Lambiyan',artist:'Jubin Nautiyal',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.53 PM.jpeg',audio:'assets/audio/Timeline.mp3'},
    {id:5,title:'Apna Bana Le',artist:'Arijit Singh',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.54 PM.jpeg',audio:'assets/audio/bonus.mp3'},
    {id:6,title:'Heeriye',artist:'Arijit Singh',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.55 PM.jpeg',audio:'assets/audio/Theme.mp3'},
    {id:7,title:'Tumi Jake Bhalobasho',artist:'Iman Chakraborty',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.56 PM.jpeg',audio:'assets/audio/Gallery.mp3'},
    {id:8,title:'Mon Majhi Re',artist:'Arijit Singh',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.57 PM.jpeg',audio:'assets/audio/Letteres.mp3'},
    {id:9,title:'Tum Mile',artist:'Neeraj Shridhar',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.58 PM.jpeg',audio:'assets/audio/Timeline.mp3'},
    {id:10,title:'Hawayein',artist:'Arijit Singh',cover:'assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.06 PM.jpeg',audio:'assets/audio/bonus.mp3'}
  ];

  const state = {index:0,playing:false,volume:0.85};

  function el(tag, attrs, html){
    const node=document.createElement(tag);
    Object.entries(attrs||{}).forEach(([k,v])=>node.setAttribute(k,v));
    if(html!==undefined) node.innerHTML=html;
    return node;
  }

  function formatTime(value){
    if(!Number.isFinite(value) || value<0) return '0:00';
    const m=Math.floor(value/60);
    const s=Math.floor(value%60).toString().padStart(2,'0');
    return `${m}:${s}`;
  }

  function setup(){
    if(document.getElementById('siteMusicPlayer')) return;

    const savedSong=Number(localStorage.getItem('atira-music-index'));
    if(Number.isInteger(savedSong) && savedSong>=0 && savedSong<songs.length) state.index=savedSong;
    const savedVolume=Number(localStorage.getItem('atira-music-volume'));
    if(Number.isFinite(savedVolume) && savedVolume>=0 && savedVolume<=1) state.volume=savedVolume;

    const player=el('aside',{id:'siteMusicPlayer',class:'site-music-player',role:'region','aria-label':'Our soundtrack'});
    player.innerHTML=`
      <button class="site-music-cover" id="siteMusicCover" type="button" aria-label="Open soundtrack controls"><img id="siteMusicCoverImg" alt="Current song cover"></button>
      <div class="site-music-meta"><span class="site-music-kicker">OUR SOUNDTRACK</span><strong id="siteMusicTitle">Loading...</strong><span id="siteMusicArtist">—</span></div>
      <div class="site-music-controls">
        <button id="siteMusicPrev" type="button" aria-label="Previous song">⏮</button>
        <button id="siteMusicPlay" type="button" aria-label="Play soundtrack">▶</button>
        <button id="siteMusicNext" type="button" aria-label="Next song">⏭</button>
      </div>
      <input id="siteMusicProgress" class="site-music-progress" type="range" min="0" max="100" value="0" step="0.1" aria-label="Track progress">
      <span id="siteMusicTime" class="site-music-time">0:00 / 0:00</span>
      <button id="siteMusicMute" class="site-music-mute" type="button" aria-label="Mute soundtrack">🔊</button>
    `;
    document.body.appendChild(player);

    const audio=document.createElement('audio');
    audio.id='siteMusicAudio';
    audio.preload='metadata';
    audio.volume=state.volume;
    document.body.appendChild(audio);

    const coverImg=document.getElementById('siteMusicCoverImg');
    const title=document.getElementById('siteMusicTitle');
    const artist=document.getElementById('siteMusicArtist');
    const play=document.getElementById('siteMusicPlay');
    const progress=document.getElementById('siteMusicProgress');
    const time=document.getElementById('siteMusicTime');
    const mute=document.getElementById('siteMusicMute');

    function load(index, autoplay=false){
      state.index=(index+songs.length)%songs.length;
      const song=songs[state.index];
      title.textContent=song.title;
      artist.textContent=song.artist;
      coverImg.src=song.cover;
      audio.src=song.audio;
      audio.load();
      localStorage.setItem('atira-music-index',String(state.index));
      if(autoplay) audio.play().catch(()=>{});
    }

    function setPlaying(value){
      state.playing=value;
      play.textContent=value?'⏸':'▶';
      player.classList.toggle('is-playing',value);
    }

    document.getElementById('siteMusicPrev').addEventListener('click',()=>{load(state.index-1,true);});
    document.getElementById('siteMusicNext').addEventListener('click',()=>{load(state.index+1,true);});
    play.addEventListener('click',()=>{
      if(audio.paused) audio.play().catch(()=>{}); else audio.pause();
    });
    progress.addEventListener('input',()=>{
      if(Number.isFinite(audio.duration) && audio.duration>0) audio.currentTime=(Number(progress.value)/100)*audio.duration;
    });
    mute.addEventListener('click',()=>{
      audio.muted=!audio.muted;
      mute.textContent=audio.muted?'🔇':'🔊';
    });
    document.getElementById('siteMusicCover').addEventListener('click',()=>audio.paused?audio.play().catch(()=>{}):audio.pause());
    audio.addEventListener('play',()=>setPlaying(true));
    audio.addEventListener('pause',()=>setPlaying(false));
    audio.addEventListener('loadedmetadata',()=>{
      progress.value=0;
      time.textContent=`0:00 / ${formatTime(audio.duration)}`;
    });
    audio.addEventListener('timeupdate',()=>{
      if(Number.isFinite(audio.duration) && audio.duration>0) progress.value=(audio.currentTime/audio.duration)*100;
      time.textContent=`${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    });
    audio.addEventListener('ended',()=>load(state.index+1,true));
    audio.addEventListener('volumechange',()=>localStorage.setItem('atira-music-volume',String(audio.volume)));

    load(state.index,false);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup,{once:true});
  else setup();
})();