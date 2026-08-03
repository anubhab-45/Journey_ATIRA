/*==================================================
ATIRA'S JOURNEY
music.js
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const audio=document.getElementById("audioPlayer");

const cover=document.getElementById("albumCover");

const title=document.getElementById("songTitle");

const artist=document.getElementById("songArtist");

const progress=document.getElementById("progress");

const currentTime=document.getElementById("currentTime");

const duration=document.getElementById("duration");

const playBtn=document.getElementById("playBtn");

const prevBtn=document.getElementById("prevBtn");

const nextBtn=document.getElementById("nextBtn");

const volume=document.getElementById("volume");

const playlist=document.getElementById("playlist");

const search=document.getElementById("musicSearch");


let filteredSongs=[...songs];

let currentSong=0;

let isPlaying=false;


/*==========================================
LOAD SONG
==========================================*/

function loadSong(index){

const song=filteredSongs[index];

if(!song)return;

title.textContent=song.title;

artist.textContent=song.artist;

cover.src=song.cover;

cover.onerror=()=>{

cover.src="assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.06 PM.jpeg";

};

audio.src=song.audio;

audio.load();

audio.pause();

localStorage.setItem(

"atira_last_song",

song.id

);

highlightSong();

}


/*==========================================
PLAY
==========================================*/

function playSong(){

if(!audio.src){

return;

}

audio.play().catch(()=>{

isPlaying=false;

playBtn.innerHTML="▶";

});

isPlaying=true;

playBtn.innerHTML="⏸";

cover.style.animationPlayState="running";

}


/*==========================================
PAUSE
==========================================*/

function pauseSong(){

audio.pause();

isPlaying=false;

playBtn.innerHTML="▶";

cover.style.animationPlayState="paused";

}


/*==========================================
BUTTON
==========================================*/

playBtn.addEventListener(

"click",

()=>{

if(isPlaying){

pauseSong();

}

else{

playSong();

}

}

);


/*==========================================
NEXT
==========================================*/

nextBtn.addEventListener(

"click",

()=>{

currentSong++;

if(currentSong>=filteredSongs.length){

currentSong=0;

}

loadSong(currentSong);

playSong();

}

);


/*==========================================
PREVIOUS
==========================================*/

prevBtn.addEventListener(

"click",

()=>{

currentSong--;

if(currentSong<0){

currentSong=

filteredSongs.length-1;

}

loadSong(currentSong);

playSong();

}

);


/*==========================================
PROGRESS
==========================================*/

audio.addEventListener(

"timeupdate",

()=>{

if(audio.duration){

progress.value=

(audio.currentTime/audio.duration)*100;

}

currentTime.textContent=

formatTime(audio.currentTime);

duration.textContent=

formatTime(audio.duration);

}

);


/*==========================================
SEEK
==========================================*/

progress.addEventListener(

"input",

()=>{

audio.currentTime=

(progress.value/100)

*

audio.duration;

}

);


/*==========================================
VOLUME
==========================================*/

volume.addEventListener(

"input",

()=>{

audio.volume=

volume.value;

}

);


/*==========================================
AUTO NEXT
==========================================*/

audio.addEventListener(

"ended",

()=>{

nextBtn.click();

}

);

audio.addEventListener("error",()=>{

const fallbackSong=filteredSongs[currentSong];

if(fallbackSong){

cover.src="assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.06 PM.jpeg";

}

});


/*==========================================
FORMAT
==========================================*/

function formatTime(sec){

if(isNaN(sec))

return"0:00";

let m=Math.floor(sec/60);

let s=Math.floor(sec%60);

if(s<10)s="0"+s;

return m+":"+s;

}


/*==========================================
PLAYLIST
==========================================*/

function renderPlaylist(){

playlist.innerHTML="";

filteredSongs.forEach((song,index)=>{

const card=document.createElement("div");

card.className="song-card";

card.dataset.index=index;

card.innerHTML=`

<img

src="${song.cover}"

alt="${song.title}">

<div class="song-info">

<h3>

${song.title}

</h3>

<p>

${song.artist}

</p>

</div>

`;

card.addEventListener(

"click",

()=>{

currentSong=index;

loadSong(index);

playSong();

}

);

playlist.appendChild(card);

});

highlightSong();

}


/*==========================================
ACTIVE
==========================================*/

function highlightSong(){

document

.querySelectorAll(".song-card")

.forEach(card=>{

card.classList.remove("active");

});

const active=

document.querySelector(

`.song-card[data-index="${currentSong}"]`

);

if(active)

active.classList.add("active");

}


/*==========================================
SEARCH
==========================================*/

search.addEventListener(

"input",

()=>{

const keyword=

search.value

.toLowerCase();

filteredSongs=

songs.filter(song=>{

return(

song.title

.toLowerCase()

.includes(keyword)

||

song.artist

.toLowerCase()

.includes(keyword)

);

});

currentSong=0;

renderPlaylist();

loadSong(0);

}

);


/*==========================================
KEYBOARD
==========================================*/

document.addEventListener(

"keydown",

e=>{

if(

e.target.tagName==="INPUT"

)return;

switch(e.code){

case"Space":

e.preventDefault();

playBtn.click();

break;

case"ArrowRight":

nextBtn.click();

break;

case"ArrowLeft":

prevBtn.click();

break;

}

}

);


/*==========================================
RESTORE LAST SONG
==========================================*/

const saved=

localStorage.getItem(

"atira_last_song"

);

if(saved){

const found=

songs.findIndex(

s=>s.id==saved

);

if(found!==-1)

currentSong=found;

}

renderPlaylist();

loadSong(currentSong);

});