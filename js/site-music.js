/* ATIRA'S JOURNEY — sitewide soundtrack */
(function(){
  'use strict';
  const songs=[
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
  const state={index:0,playing:false,volume:.85};
  const fmt=v=>Number.isFinite(v)&&v>=0?`${Math.floor(v/60)}:${Math.floor(v%60).toString().padStart(2,'0')}`:'0:00';
  function setup(){
    if(document.getElementById('siteMusicPlayer'))return;
    const player=document.createElement('aside');player.id='siteMusicPlayer';player.className='site-music-player';player.setAttribute('aria-label','Our soundtrack');
    player.innerHTML='<button class="site-music-cover" id="siteMusicCover" type="button"><img id="siteMusicCoverImg" alt="Current song cover"></button><div class="site-music-meta"><span class="site-music-kicker">OUR SOUNDTRACK</span><strong id="siteMusicTitle">Loading...</strong><span id="siteMusicArtist">—</span></div><div class="site-music-controls"><button id="siteMusicPrev" type="button">⏮</button><button id="siteMusicPlay" type="button">▶</button><button id="siteMusicNext" type="button">⏭</button></div><input id="siteMusicProgress" class="site-music-progress" type="range" min="0" max="100" value="0"><span id="siteMusicTime" class="site-music-time">0:00 / 0:00</span><button id="siteMusicMute" class="site-music-mute" type="button">🔊</button>';
    document.body.appendChild(player);const audio=document.createElement('audio');audio.id='siteMusicAudio';audio.preload='metadata';audio.volume=state.volume;document.body.appendChild(audio);
    const cover=document.getElementById('siteMusicCoverImg'),title=document.getElementById('siteMusicTitle'),artist=document.getElementById('siteMusicArtist'),play=document.getElementById('siteMusicPlay'),progress=document.getElementById('siteMusicProgress'),time=document.getElementById('siteMusicTime'),mute=document.getElementById('siteMusicMute');
    function load(i,autoplay){state.index=(i+songs.length)%songs.length;const s=songs[state.index];title.textContent=s.title;artist.textContent=s.artist;cover.src=s.cover;audio.src=s.audio;audio.load();if(autoplay)audio.play().catch(()=>{});}
    function render(){play.textContent=audio.paused?'▶':'⏸';player.classList.toggle('is-playing',!audio.paused);}
    document.getElementById('siteMusicPrev').onclick=()=>load(state.index-1,true);document.getElementById('siteMusicNext').onclick=()=>load(state.index+1,true);play.onclick=()=>audio.paused?audio.play().catch(()=>{}):audio.pause();document.getElementById('siteMusicCover').onclick=()=>play.click();mute.onclick=()=>{audio.muted=!audio.muted;mute.textContent=audio.muted?'🔇':'🔊'};
    progress.oninput=()=>{if(audio.duration)audio.currentTime=progress.value/100*audio.duration};audio.onplay=render;audio.onpause=render;audio.onloadedmetadata=()=>time.textContent=`0:00 / ${fmt(audio.duration)}`;audio.ontimeupdate=()=>{if(audio.duration)progress.value=audio.currentTime/audio.duration*100;time.textContent=`${fmt(audio.currentTime)} / ${fmt(audio.duration)}`};audio.onended=()=>load(state.index+1,true);load(0,false);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});else setup();
})();