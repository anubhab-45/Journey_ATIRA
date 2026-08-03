/*==================================================
    ATIRA'S JOURNEY
    timeline.js

    MEMORY COLLECTION
==================================================*/


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /*==================================================
            ELEMENTS
        ==================================================*/

        const grid =
            document.getElementById(
                "timelineGrid"
            );


        const empty =
            document.getElementById(
                "timelineEmpty"
            );


        const modal =
            document.getElementById(
                "timelineModal"
            );


        const modalOverlay =
            document.getElementById(
                "timelineModalOverlay"
            );


        const modalClose =
            document.getElementById(
                "timelineClose"
            );


        const modalMedia =
            document.getElementById(
                "timelineModalMedia"
            );


        const modalCategory =
            document.getElementById(
                "timelineModalCategory"
            );


        const modalTitle =
            document.getElementById(
                "timelineModalTitle"
            );


        const modalDescription =
            document.getElementById(
                "timelineModalDescription"
            );


        if(!grid){

            console.error(
                "Timeline error: #timelineGrid not found."
            );

            return;

        }



        /*==================================================
            DATA
        ==================================================*/

        const data =
            Array.isArray(window.timelineMemories)
                ? window.timelineMemories
                : (
                    Array.isArray(window.memories)
                        ? window.memories
                        : (
                            typeof timelineMemories !== "undefined"
                                ? timelineMemories
                                : []
                        )
                );



        /*==================================================
            ESCAPE HTML
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



        /*==================================================
            GET TYPE
        ==================================================*/

        function getType(item){

            return String(
                item.type || "photo"
            ).toLowerCase();

        }



        /*==================================================
            CREATE MEDIA
        ==================================================*/

        function createCardMedia(item){

            const type =
                getType(item);


            const src =
                escapeHTML(
                    item.src || ""
                );


            const title =
                escapeHTML(
                    item.title || "Memory"
                );


            /*----------------------------------------------
                VIDEO
            ----------------------------------------------*/

            if(type === "video"){

                const poster =
                    item.poster
                        ? `poster="${escapeHTML(item.poster)}"`
                        : "";


                return `

                    <div class="timeline-card-media">

                        <video
                            src="${src}"
                            ${poster}
                            muted
                            playsinline
                            preload="metadata">
                        </video>


                        <div
                            class="timeline-video-badge">

                            ▶

                        </div>

                    </div>

                `;

            }


            /*----------------------------------------------
                PHOTO
            ----------------------------------------------*/

            return `

                <div class="timeline-card-media">

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
                "timeline-card";


            card.tabIndex = 0;


            card.dataset.index =
                String(index);


            const category =
                escapeHTML(
                    item.category ||
                    "MEMORY"
                );


            const title =
                escapeHTML(
                    item.title ||
                    "Beautiful Memory"
                );


            const description =
                escapeHTML(
                    item.description ||
                    "A memory worth keeping."
                );


            const date =
                escapeHTML(
                    item.date ||
                    ""
                );


            card.innerHTML = `

                ${createCardMedia(item)}


                <div
                    class="timeline-card-overlay">


                    <span
                        class="timeline-card-category">

                        ${category}

                    </span>


                    <h3
                        class="timeline-card-title">

                        ${title}

                    </h3>


                    <p
                        class="timeline-card-description">

                        ${description}

                    </p>


                    ${
                        date
                            ? `
                                <span
                                    class="timeline-card-date">

                                    ${date}

                                </span>
                              `
                            : ""
                    }

                </div>

            `;


            /*----------------------------------------------
                CLICK
            ----------------------------------------------*/

            card.addEventListener(
                "click",
                () => {

                    openModal(
                        item
                    );

                }
            );


            /*----------------------------------------------
                KEYBOARD
            ----------------------------------------------*/

            card.addEventListener(
                "keydown",
                event => {

                    if(
                        event.key === "Enter" ||
                        event.key === " "
                    ){

                        event.preventDefault();


                        openModal(
                            item
                        );

                    }

                }
            );


            return card;

        }



        /*==================================================
            LOAD MEMORIES
        ==================================================*/

        function loadMemories(){

            grid.innerHTML = "";


            if(
                !data ||
                data.length === 0
            ){

                if(empty){

                    empty.hidden = false;

                }

                return;

            }


            if(empty){

                empty.hidden = true;

            }


            data.forEach(
                (item,index) => {

                    if(!item){

                        return;

                    }


                    const card =
                        createCard(
                            item,
                            index
                        );


                    grid.appendChild(
                        card
                    );

                }
            );

        }



        /*==================================================
            OPEN MODAL
        ==================================================*/

        function openModal(item){

            if(!modal){

                return;

            }


            const type =
                getType(item);


            const src =
                escapeHTML(
                    item.src || ""
                );


            const title =
                escapeHTML(
                    item.title ||
                    "Memory"
                );


            const category =
                escapeHTML(
                    item.category ||
                    "MEMORY"
                );


            const description =
                escapeHTML(
                    item.description ||
                    ""
                );


            /*----------------------------------------------
                MEDIA
            ----------------------------------------------*/

            if(type === "video"){

                modalMedia.innerHTML = `

                    <video
                        src="${src}"
                        controls
                        autoplay
                        playsinline>

                    </video>

                `;


                const video =
                    modalMedia.querySelector(
                        "video"
                    );


                if(video){

                    video.play()
                        .catch(() => {});

                }

            }else{

                modalMedia.innerHTML = `

                    <img
                        src="${src}"
                        alt="${title}">

                `;

            }


            /*----------------------------------------------
                TEXT
            ----------------------------------------------*/

            modalCategory.textContent =
                category;


            modalTitle.textContent =
                title;


            modalDescription.textContent =
                description;


            /*----------------------------------------------
                SHOW
            ----------------------------------------------*/

            modal.classList.add(
                "show"
            );


            modal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "lightbox-open"
            );

        }



        /*==================================================
            CLOSE MODAL
        ==================================================*/

        function closeModal(){

            if(!modal){

                return;

            }


            modal.classList.remove(
                "show"
            );


            modal.setAttribute(
                "aria-hidden",
                "true"
            );


            document.body.classList.remove(
                "lightbox-open"
            );


            if(modalMedia){

                modalMedia.innerHTML = "";

            }

        }



        /*==================================================
            CLOSE BUTTON
        ==================================================*/

        if(modalClose){

            modalClose.addEventListener(
                "click",
                closeModal
            );

        }



        /*==================================================
            OVERLAY CLICK
        ==================================================*/

        if(modalOverlay){

            modalOverlay.addEventListener(
                "click",
                closeModal
            );

        }



        /*==================================================
            ESCAPE
        ==================================================*/

        document.addEventListener(
            "keydown",
            event => {

                if(
                    event.key === "Escape" &&
                    modal &&
                    modal.classList.contains(
                        "show"
                    )
                ){

                    closeModal();

                }

            }
        );



        /*==================================================
            INITIAL LOAD
        ==================================================*/

        loadMemories();


        console.log(
            `Timeline Loaded — ${data.length} memories`
        );

    }
);