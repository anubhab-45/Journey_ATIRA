/*==================================================
    ATIRA'S JOURNEY
    gallery.js

    COMPLETE GALLERY SYSTEM
==================================================*/


document.addEventListener(
    "DOMContentLoaded",
    function(){

        /*==================================================
            ELEMENTS
        ==================================================*/

        const galleryGrid =
            document.getElementById(
                "galleryGrid"
            );


        const searchBox =
            document.getElementById(
                "searchBox"
            );


        const filterButtons =
            document.querySelectorAll(
                ".filter-btn[data-filter]"
            );


        const galleryEmpty =
            document.getElementById(
                "galleryEmpty"
            );


        const clearSearch =
            document.getElementById(
                "clearSearch"
            );


        const resultCount =
            document.getElementById(
                "galleryResultCount"
            );


        const lightbox =
            document.getElementById(
                "lightbox"
            );


        const lightboxContent =
            document.getElementById(
                "lightboxContent"
            );


        const lightboxClose =
            document.getElementById(
                "lightboxClose"
            );


        const lightboxPrev =
            document.getElementById(
                "lightboxPrev"
            );


        const lightboxNext =
            document.getElementById(
                "lightboxNext"
            );


        const lightboxCounter =
            document.getElementById(
                "lightboxCounter"
            );



        /*==================================================
            SAFETY CHECK
        ==================================================*/

        if(!galleryGrid){

            console.error(
                "Gallery Error: #galleryGrid not found."
            );

            return;

        }



        /*==================================================
            DATA
        ==================================================*/

        let allMemories = [];


        try{

            if(
                typeof memories !==
                "undefined" &&
                Array.isArray(memories)
            ){

                allMemories =
                    memories.slice();

            }

        }catch(error){

            console.error(
                "Gallery data could not be loaded:",
                error
            );

        }


        /*
            Fallback for window.memories
            if data file uses window.memories.
        */

        if(
            allMemories.length === 0 &&
            Array.isArray(window.memories)
        ){

            allMemories =
                window.memories.slice();

        }



        /*==================================================
            STATE
        ==================================================*/

        let currentFilter = "all";

        let currentSearch = "";

        let currentGallery = [];

        let currentIndex = 0;



        /*==================================================
            HELPERS
        ==================================================*/

        function escapeHTML(value){

            if(
                value === null ||
                value === undefined
            ){

                return "";

            }


            return String(value)
                .replace(/&/g,"&amp;")
                .replace(/</g,"&lt;")
                .replace(/>/g,"&gt;")
                .replace(/"/g,"&quot;")
                .replace(/'/g,"&#039;");

        }



        function getType(item){

            const type =
                String(
                    item?.type || "photo"
                ).toLowerCase();


            return type === "video"
                ? "video"
                : "photo";

        }



        function getTitle(item){

            return (
                item?.title ||
                "Beautiful Memory"
            );

        }



        function getDescription(item){

            return (
                item?.description ||
                "A beautiful memory from our journey."
            );

        }



        function getCategory(item){

            return (
                item?.category ||
                getType(item)
            );

        }



        /*==================================================
            FILTER DATA
        ==================================================*/

        function getFilteredMemories(){

            const search =
                currentSearch
                    .trim()
                    .toLowerCase();


            return allMemories.filter(
                function(item){

                    if(!item){

                        return false;

                    }


                    const type =
                        getType(item);


                    const matchesFilter =
                        currentFilter === "all" ||
                        type === currentFilter;


                    if(!matchesFilter){

                        return false;

                    }


                    if(!search){

                        return true;

                    }


                    const searchableText = [

                        getTitle(item),

                        getDescription(item),

                        getCategory(item),

                        item?.date || ""

                    ]
                    .join(" ")
                    .toLowerCase();


                    return searchableText.includes(
                        search
                    );

                }
            );

        }



        /*==================================================
            CREATE MEDIA
        ==================================================*/

        function createMedia(item){

            const type =
                getType(item);


            const src =
                escapeHTML(
                    item?.src || ""
                );


            const title =
                escapeHTML(
                    getTitle(item)
                );


            /*----------------------------------------------
                VIDEO
            ----------------------------------------------*/

            if(type === "video"){

                const poster =
                    item?.poster
                        ? `
                            poster="${escapeHTML(
                                item.poster
                            )}"
                          `
                        : "";


                return `

                    <div
                        class="gallery-item-media">

                        <video
                            src="${src}"
                            ${poster}
                            muted
                            playsinline
                            preload="metadata">

                        </video>


                        <div
                            class="video-badge"
                            aria-hidden="true">

                            ▶

                        </div>

                    </div>

                `;

            }


            /*----------------------------------------------
                PHOTO
            ----------------------------------------------*/

            return `

                <div
                    class="gallery-item-media">

                    <img
                        src="${src}"
                        alt="${title}"
                        loading="lazy">

                </div>

            `;

        }



        /*==================================================
            CREATE CARD
        ==================================================*/

        function createCard(item,index){

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "gallery-item";


            card.dataset.index =
                String(index);


            card.tabIndex = 0;


            const title =
                escapeHTML(
                    getTitle(item)
                );


            const description =
                escapeHTML(
                    getDescription(item)
                );


            const category =
                escapeHTML(
                    getCategory(item)
                );


            card.innerHTML = `

                ${createMedia(item)}


                <div
                    class="gallery-overlay">


                    <span
                        class="gallery-category">

                        ${category}

                    </span>


                    <h3>

                        ${title}

                    </h3>


                    <p>

                        ${description}

                    </p>


                </div>

            `;


            /*----------------------------------------------
                IMAGE ERROR
            ----------------------------------------------*/

            const image =
                card.querySelector(
                    "img"
                );


            if(image){

                image.addEventListener(
                    "error",
                    function(){

                        image.style.display =
                            "none";

                    }
                );

            }



            /*----------------------------------------------
                VIDEO ERROR
            ----------------------------------------------*/

            const video =
                card.querySelector(
                    "video"
                );


            if(video){

                video.addEventListener(
                    "error",
                    function(){

                        video.style.opacity =
                            "0.35";

                    }
                );


                /*
                    Small hover preview.
                */

                card.addEventListener(
                    "mouseenter",
                    function(){

                        video.play()
                            .catch(
                                function(){}
                            );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function(){

                        video.pause();

                        video.currentTime = 0;

                    }
                );

            }



            /*----------------------------------------------
                CLICK
            ----------------------------------------------*/

            card.addEventListener(
                "click",
                function(){

                    openLightbox(
                        getFilteredMemories(),
                        index
                    );

                }
            );


            /*----------------------------------------------
                KEYBOARD
            ----------------------------------------------*/

            card.addEventListener(
                "keydown",
                function(event){

                    if(
                        event.key === "Enter" ||
                        event.key === " "
                    ){

                        event.preventDefault();


                        openLightbox(
                            getFilteredMemories(),
                            index
                        );

                    }

                }
            );


            return card;

        }



        /*==================================================
            RENDER GALLERY
        ==================================================*/

        function renderGallery(){

            const filtered =
                getFilteredMemories();


            galleryGrid.innerHTML =
                "";


            currentGallery =
                filtered;


            /*----------------------------------------------
                RESULT COUNT
            ----------------------------------------------*/

            if(resultCount){

                resultCount.textContent =
                    `${filtered.length} ${
                        filtered.length === 1
                            ? "memory"
                            : "memories"
                    }`;

            }



            /*----------------------------------------------
                EMPTY
            ----------------------------------------------*/

            if(
                filtered.length === 0
            ){

                if(galleryEmpty){

                    galleryEmpty.hidden =
                        false;

                }

                return;

            }


            if(galleryEmpty){

                galleryEmpty.hidden =
                    true;

            }



            /*----------------------------------------------
                CARDS
            ----------------------------------------------*/

            filtered.forEach(
                function(item,index){

                    const card =
                        createCard(
                            item,
                            index
                        );


                    galleryGrid.appendChild(
                        card
                    );

                }
            );

        }



        /*==================================================
            SEARCH
        ==================================================*/

        if(searchBox){

            searchBox.addEventListener(
                "input",
                function(event){

                    currentSearch =
                        event.target.value;

                    renderGallery();

                }
            );

        }



        /*==================================================
            FILTER
        ==================================================*/

        filterButtons.forEach(
            function(button){

                button.addEventListener(
                    "click",
                    function(){

                        filterButtons.forEach(
                            function(btn){

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        currentFilter =
                            button.dataset.filter ||
                            "all";


                        renderGallery();

                    }
                );

            }
        );



        /*==================================================
            CLEAR SEARCH
        ==================================================*/

        if(clearSearch){

            clearSearch.addEventListener(
                "click",
                function(){

                    currentSearch = "";

                    if(searchBox){

                        searchBox.value =
                            "";

                    }


                    currentFilter =
                        "all";


                    filterButtons.forEach(
                        function(button){

                            button.classList.toggle(
                                "active",
                                button.dataset.filter ===
                                "all"
                            );

                        }
                    );


                    renderGallery();

                }
            );

        }



        /*==================================================
            OPEN LIGHTBOX
        ==================================================*/

        function openLightbox(
            data,
            index
        ){

            if(
                !lightbox ||
                !lightboxContent ||
                !data ||
                data.length === 0
            ){

                return;

            }


            currentGallery =
                data;


            currentIndex =
                index;


            showLightboxItem();


            lightbox.classList.add(
                "show"
            );


            lightbox.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.style.overflow =
                "hidden";

        }



        /*==================================================
            SHOW LIGHTBOX ITEM
        ==================================================*/

        function showLightboxItem(){

            const item =
                currentGallery[
                    currentIndex
                ];


            if(!item){

                return;

            }


            const type =
                getType(item);


            const src =
                escapeHTML(
                    item?.src || ""
                );


            const title =
                escapeHTML(
                    getTitle(item)
                );


            const description =
                escapeHTML(
                    getDescription(item)
                );


            const category =
                escapeHTML(
                    getCategory(item)
                );


            /*----------------------------------------------
                PHOTO
            ----------------------------------------------*/

            if(type === "photo"){

                lightboxContent.innerHTML = `

                    <div
                        class="lightbox-media-wrapper">

                        <img
                            src="${src}"
                            alt="${title}">

                    </div>

                `;

            }


            /*----------------------------------------------
                VIDEO
            ----------------------------------------------*/

            else{

                lightboxContent.innerHTML = `

                    <div
                        class="lightbox-media-wrapper">

                        <video
                            src="${src}"
                            controls
                            autoplay
                            playsinline>

                        </video>

                    </div>

                `;

            }



            /*----------------------------------------------
                COUNTER
            ----------------------------------------------*/

            if(lightboxCounter){

                lightboxCounter.textContent =
                    `${currentIndex + 1} / ${
                        currentGallery.length
                    }`;

            }



            /*----------------------------------------------
                ACCESSIBILITY
            ----------------------------------------------*/

            lightboxContent.setAttribute(
                "aria-label",
                `${category}: ${title}. ${description}`
            );



            /*----------------------------------------------
                VIDEO AUTOPLAY
            ----------------------------------------------*/

            const video =
                lightboxContent.querySelector(
                    "video"
                );


            if(video){

                video.play()
                    .catch(
                        function(){}
                    );

            }

        }



        /*==================================================
            NEXT
        ==================================================*/

        function showNext(){

            if(
                !currentGallery ||
                currentGallery.length === 0
            ){

                return;

            }


            currentIndex++;

            if(
                currentIndex >=
                currentGallery.length
            ){

                currentIndex = 0;

            }


            showLightboxItem();

        }



        /*==================================================
            PREVIOUS
        ==================================================*/

        function showPrevious(){

            if(
                !currentGallery ||
                currentGallery.length === 0
            ){

                return;

            }


            currentIndex--;

            if(
                currentIndex < 0
            ){

                currentIndex =
                    currentGallery.length - 1;

            }


            showLightboxItem();

        }



        /*==================================================
            NEXT BUTTON
        ==================================================*/

        if(lightboxNext){

            lightboxNext.addEventListener(
                "click",
                function(event){

                    event.stopPropagation();

                    showNext();

                }
            );

        }



        /*==================================================
            PREVIOUS BUTTON
        ==================================================*/

        if(lightboxPrev){

            lightboxPrev.addEventListener(
                "click",
                function(event){

                    event.stopPropagation();

                    showPrevious();

                }
            );

        }



        /*==================================================
            CLOSE LIGHTBOX
        ==================================================*/

        function closeLightbox(){

            if(!lightbox){

                return;

            }


            lightbox.classList.remove(
                "show"
            );


            lightbox.setAttribute(
                "aria-hidden",
                "true"
            );


            if(lightboxContent){

                lightboxContent.innerHTML =
                    "";

            }


            document.body.style.overflow =
                "";

        }



        /*==================================================
            CLOSE BUTTON
        ==================================================*/

        if(lightboxClose){

            lightboxClose.addEventListener(
                "click",
                function(event){

                    event.stopPropagation();

                    closeLightbox();

                }
            );

        }



        /*==================================================
            CLICK OUTSIDE
        ==================================================*/

        if(lightbox){

            lightbox.addEventListener(
                "click",
                function(event){

                    if(
                        event.target ===
                        lightbox
                    ){

                        closeLightbox();

                    }

                }
            );

        }



        /*==================================================
            KEYBOARD
        ==================================================*/

        document.addEventListener(
            "keydown",
            function(event){

                if(
                    !lightbox ||
                    !lightbox.classList.contains(
                        "show"
                    )
                ){

                    return;

                }


                switch(event.key){

                    case "Escape":

                        closeLightbox();

                        break;


                    case "ArrowRight":

                        showNext();

                        break;


                    case "ArrowLeft":

                        showPrevious();

                        break;

                }

            }
        );



        /*==================================================
            TOUCH SWIPE
        ==================================================*/

        let touchStartX = 0;

        let touchEndX = 0;


        if(lightbox){

            lightbox.addEventListener(
                "touchstart",
                function(event){

                    if(
                        event.touches &&
                        event.touches.length > 0
                    ){

                        touchStartX =
                            event.touches[0].clientX;

                    }

                },
                {passive:true}
            );


            lightbox.addEventListener(
                "touchend",
                function(event){

                    if(
                        event.changedTouches &&
                        event.changedTouches.length > 0
                    ){

                        touchEndX =
                            event.changedTouches[0].clientX;

                    }


                    const difference =
                        touchStartX -
                        touchEndX;


                    if(
                        Math.abs(difference) < 50
                    ){

                        return;

                    }


                    if(difference > 0){

                        showNext();

                    }else{

                        showPrevious();

                    }

                },
                {passive:true}
            );

        }



        /*==================================================
            INITIAL LOAD
        ==================================================*/

        renderGallery();


        console.log(
            `Gallery Loaded Successfully — ${allMemories.length} memories`
        );

    }
);
