/*==================================================
ATIRA'S JOURNEY
VIDEOS PAGE
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

const grid=document.getElementById("videoGrid");

const searchBox=document.getElementById("searchBox");

const filterButtons=document.querySelectorAll(".filter-btn");

const modal=document.getElementById("videoModal");

const modalContent=document.getElementById("videoContent");

const modalClose=document.getElementById("videoClose");

const modalPrev=document.getElementById("videoPrev");

const modalNext=document.getElementById("videoNext");

const modalCounter=document.getElementById("videoCounter");

let currentFilter="all";

let currentSearch="";

let filteredVideos=[];

let currentIndex=0;


/*==========================
LOAD
==========================*/

function renderVideos(){

grid.innerHTML="";

filteredVideos=videos.filter(video=>{

const filterOk=

currentFilter==="all"

||

video.category===currentFilter;

const searchOk=

video.title

.toLowerCase()

.includes(

currentSearch.toLowerCase()

);

return filterOk && searchOk;

});


filteredVideos.forEach((video,index)=>{

const card=document.createElement("div");

card.className="video-card glass";

card.innerHTML=`

<img

src="${video.thumbnail}"

alt="${video.title}"

loading="lazy">

<div class="video-play">

▶

</div>

<div class="video-overlay">

<h3>

${video.title}

</h3>

<p>

${video.description}

</p>

</div>

`;

const image=card.querySelector("img");

image.onerror=()=>{

image.src="assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.09.06 PM.jpeg";

};

card.addEventListener("click",()=>{

openVideo(index);

});

grid.appendChild(card);

});

}


/*==========================
SEARCH
==========================*/

searchBox.addEventListener("input",e=>{

currentSearch=e.target.value;

renderVideos();

});


/*==========================
FILTER
==========================*/

filterButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

filterButtons.forEach(

b=>b.classList.remove("active")

);

btn.classList.add("active");

currentFilter=btn.dataset.filter;

renderVideos();

});

});


/*==========================
OPEN
==========================*/

function openVideo(index){

currentIndex=index;

showVideo();

modal.classList.add("show");

document.body.style.overflow="hidden";

}


/*==========================
SHOW
==========================*/

function showVideo(){

const video=filteredVideos[currentIndex];

modalContent.innerHTML=`

<video

src="${video.video}"

controls

playsinline

preload="metadata">

</video>

`;

const player=

modalContent.querySelector("video");

player.onerror=()=>{

modalContent.innerHTML=`

<div style="

color:white;

text-align:center;

padding:50px;

font-size:1.2rem;

">

Video file missing.

</div>

`;

};

modalCounter.innerHTML=`

${currentIndex+1}

/

${filteredVideos.length}

`;

}


/*==========================
NEXT
==========================*/

modalNext.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=filteredVideos.length){

currentIndex=0;

}

showVideo();

});


/*==========================
PREVIOUS
==========================*/

modalPrev.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=

filteredVideos.length-1;

}

showVideo();

});


/*==========================
CLOSE
==========================*/

function closeModal(){

modal.classList.remove("show");

modalContent.innerHTML="";

document.body.style.overflow="";

}


modalClose.addEventListener(

"click",

closeModal

);


/*==========================
CLICK OUTSIDE
==========================*/

modal.addEventListener(

"click",

e=>{

if(e.target===modal){

closeModal();

}

}

);


/*==========================
KEYBOARD
==========================*/

document.addEventListener(

"keydown",

e=>{

if(!modal.classList.contains("show"))

return;

if(e.key==="Escape")

closeModal();

if(e.key==="ArrowRight")

modalNext.click();

if(e.key==="ArrowLeft")

modalPrev.click();

}

);


/*==========================
INITIAL
==========================*/

renderVideos();

console.log(

"Videos Loaded Successfully"

);

});