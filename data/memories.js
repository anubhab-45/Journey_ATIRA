/*==================================================
  ATIRA'S JOURNEY
  memories.js
  Part 1/2
==================================================*/


const memories = [

/*=====================================
PHOTO
======================================*/

{

id:1,

type:"photo",

title:"Memory 001",

description:"A beautiful moment together.",

date:"2025-08-14",

category:"normal",

favorite:true,

location:"",

src:"assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.50 PM.jpeg"

},

{

id:2,

type:"photo",

title:"Memory 002",

description:"Captured with love.",

date:"2025-08-15",

category:"normal",

favorite:false,

location:"",

src:"assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.51 PM.jpeg"

},

{

id:3,

type:"photo",

title:"Memory 003",

description:"Smiles that last forever.",

date:"2025-08-16",

category:"normal",

favorite:false,

location:"",

src:"assets/photos/Anni_photo/WhatsApp Image 2026-07-25 at 11.08.52 PM.jpeg"

},

{

id:4,

type:"video",

title:"Video 001",

description:"Our unforgettable moment.",

date:"2025-08-20",

category:"video",

favorite:true,

location:"",

src:"assets/videos/Anni_Videos/WhatsApp Video 2026-07-25 at 11.08.53 PM.mp4"

},

];



/*=====================================
HELPER FUNCTIONS
======================================*/

function getPhotos(){

return memories.filter(

m=>m.type==="photo"

);

}


function getVideos(){

return memories.filter(

m=>m.type==="video"

);

}


function getFavorites(){

return memories.filter(

m=>m.favorite

);

}/*==================================================
  ATIRA'S JOURNEY
  memories.js
  Part 2/2
==================================================*/


/*=====================================
SORT
======================================*/

function sortNewest(){

return [...memories].sort(

(a,b)=>new Date(b.date)-new Date(a.date)

);

}


function sortOldest(){

return [...memories].sort(

(a,b)=>new Date(a.date)-new Date(b.date)

);

}


/*=====================================
SEARCH
======================================*/

function searchMemory(keyword){

keyword=keyword.toLowerCase();

return memories.filter(item=>

item.title.toLowerCase().includes(keyword)

||

item.description.toLowerCase().includes(keyword)

||

item.category.toLowerCase().includes(keyword)

);

}


/*=====================================
GET BY ID
======================================*/

function getMemory(id){

return memories.find(

item=>item.id===id

);

}


/*=====================================
RANDOM MEMORY
======================================*/

function getRandomMemory(){

return memories[

Math.floor(

Math.random()*memories.length

)

];

}


/*=====================================
TOTALS
======================================*/

const totalPhotos=

getPhotos().length;

const totalVideos=

getVideos().length;

const totalFavorites=

getFavorites().length;


/*=====================================
CONSOLE
======================================*/

console.log(

"=============================="

);

console.log(

"ATIRA'S JOURNEY DATABASE"

);

console.log(

"Total Memories :",

memories.length

);

console.log(

"Photos :",totalPhotos

);

console.log(

"Videos :",totalVideos

);

console.log(

"Favorites :",totalFavorites

);

console.log(

"=============================="

);


/*=====================================
GLOBAL EXPORT
======================================*/

window.memories=memories;

window.getPhotos=getPhotos;

window.getVideos=getVideos;

window.getFavorites=getFavorites;

window.getMemory=getMemory;

window.getRandomMemory=getRandomMemory;

window.searchMemory=searchMemory;

window.sortNewest=sortNewest;

window.sortOldest=sortOldest;


/*=====================================
END
======================================*/