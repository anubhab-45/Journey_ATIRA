/*==================================================
  ATIRA'S JOURNEY
  MEMORY VAULT ENGINE
==================================================*/


/*==================================================
  ELEMENTS
==================================================*/

const vaultGrid =
    document.getElementById("vaultGrid");

const vaultEmpty =
    document.getElementById("vaultEmpty");

const vaultModal =
    document.getElementById("vaultModal");

const vaultModalOverlay =
    document.getElementById("vaultModalOverlay");

const vaultClose =
    document.getElementById("vaultClose");

const unlockAnimation =
    document.getElementById("unlockAnimation");

const vaultMemoryContent =
    document.getElementById("vaultMemoryContent");

const vaultMemoryCategory =
    document.getElementById("vaultMemoryCategory");

const vaultMemoryTitle =
    document.getElementById("vaultMemoryTitle");

const vaultMemoryText =
    document.getElementById("vaultMemoryText");

const vaultMemoryImageWrap =
    document.getElementById("vaultMemoryImageWrap");

const vaultMemoryImage =
    document.getElementById("vaultMemoryImage");


/*==================================================
  STATE
==================================================*/

let unlockTimer = null;

let activeMemoryIndex = null;


/*==================================================
  RENDER VAULT
==================================================*/

function renderVault(){

    if (
        !vaultGrid ||
        !Array.isArray(window.vaultData)
    ){

        console.error(
            "Memory Vault data could not be loaded."
        );

        return;

    }


    vaultGrid.innerHTML = "";


    if (window.vaultData.length === 0){

        if (vaultEmpty){

            vaultEmpty.style.display =
                "block";

        }

        return;

    }


    if (vaultEmpty){

        vaultEmpty.style.display =
            "none";

    }


    window.vaultData.forEach(
        (memory,index) => {


            const card =
                document.createElement("article");


            card.className =
                "vault-card";


            card.dataset.index =
                index;


            const isLocked =
                memory.locked !== false;


            card.innerHTML = `

                <div class="vault-card-top">

                    <span class="vault-card-category">

                        ${escapeHTML(
                            memory.category ||
                            "Memory"
                        )}

                    </span>


                    <span class="vault-card-lock">

                        ${isLocked ? "🔒" : "🔓"}

                    </span>

                </div>


                <div>

                    <div class="vault-card-icon">

                        ${memory.icon || "🔐"}

                    </div>


                    <h3>

                        ${escapeHTML(
                            memory.title ||
                            "Untitled Memory"
                        )}

                    </h3>


                    <p class="vault-card-description">

                        ${escapeHTML(
                            memory.description ||
                            ""
                        )}

                    </p>

                </div>


                <div class="vault-card-action">

                    <span>

                        ${isLocked
                            ? "🔐 Unlock Memory"
                            : "🔓 Open Memory"
                        }

                    </span>

                </div>

            `;


            card.addEventListener(
                "click",
                () => openMemory(index)
            );


            vaultGrid.appendChild(card);

        }
    );

}


/*==================================================
  OPEN MEMORY
==================================================*/

function openMemory(index){

    if (
        !Array.isArray(window.vaultData) ||
        !window.vaultData[index]
    ){

        return;

    }


    const memory =
        window.vaultData[index];


    if (!vaultModal){

        return;

    }


    /*
      Cancel previous timer.
    */

    if (unlockTimer){

        clearTimeout(unlockTimer);

        unlockTimer = null;

    }


    activeMemoryIndex =
        index;


    /*
      Reset modal.
    */

    vaultModal.classList.remove(
        "unlocking"
    );


    if (vaultMemoryContent){

        vaultMemoryContent.style.display =
            "none";

    }


    if (unlockAnimation){

        unlockAnimation.style.display =
            "flex";

    }


    /*
      Open modal.
    */

    vaultModal.classList.add(
        "show"
    );


    document.body.classList.add(
        "vault-open"
    );


    /*
      Locked memory gets
      cinematic unlock effect.
    */

    if (memory.locked !== false){

        unlockTimer = setTimeout(
            () => {


                if (
                    activeMemoryIndex !== index
                ){

                    return;

                }


                showMemory(memory);


                unlockTimer = null;

            },
            1200
        );

    }

    else{

        showMemory(memory);

    }

}


/*==================================================
  SHOW MEMORY
==================================================*/

function showMemory(memory){

    if (!memory){

        return;

    }


    if (vaultMemoryCategory){

        vaultMemoryCategory.textContent =
            memory.category ||
            "MEMORY";

    }


    if (vaultMemoryTitle){

        vaultMemoryTitle.textContent =
            memory.title ||
            "Untitled Memory";

    }


    if (vaultMemoryText){

        vaultMemoryText.textContent =
            memory.content ||
            "This memory is waiting to be written.";

    }


    /*
      Reset image.
    */

    if (vaultMemoryImageWrap){

        vaultMemoryImageWrap.classList.remove(
            "show"
        );

    }


    if (vaultMemoryImage){

        vaultMemoryImage.src = "";

    }


    /*
      Load photo if available.
    */

    if (
        memory.type === "photo" &&
        memory.src
    ){

        vaultMemoryImage.onload =
            () => {

                vaultMemoryImageWrap.classList.add(
                    "show"
                );

            };


        vaultMemoryImage.onerror =
            () => {

                vaultMemoryImageWrap.classList.remove(
                    "show"
                );

                console.warn(
                    "Vault image not found:",
                    memory.src
                );

            };


        vaultMemoryImage.src =
            memory.src;

        vaultMemoryImage.alt =
            memory.title ||
            "Memory";

    }


    /*
      Hide unlock screen.
    */

    if (unlockAnimation){

        unlockAnimation.style.display =
            "none";

    }


    /*
      Show memory.
    */

    if (vaultMemoryContent){

        vaultMemoryContent.style.display =
            "block";

    }

}


/*==================================================
  CLOSE VAULT
==================================================*/

function closeVault(){

    if (!vaultModal){

        return;

    }


    if (unlockTimer){

        clearTimeout(unlockTimer);

        unlockTimer = null;

    }


    activeMemoryIndex =
        null;


    vaultModal.classList.remove(
        "show"
    );


    vaultModal.classList.remove(
        "unlocking"
    );


    document.body.classList.remove(
        "vault-open"
    );


    document.body.style.overflow =
        "";


    setTimeout(
        () => {


            if (vaultMemoryContent){

                vaultMemoryContent.style.display =
                    "none";

            }


            if (unlockAnimation){

                unlockAnimation.style.display =
                    "flex";

            }


            if (vaultMemoryText){

                vaultMemoryText.textContent =
                    "";

            }


            if (vaultMemoryImage){

                vaultMemoryImage.src =
                    "";

            }


            if (vaultMemoryImageWrap){

                vaultMemoryImageWrap.classList.remove(
                    "show"
                );

            }

        },
        350
    );

}


/*==================================================
  CLOSE BUTTON
==================================================*/

if (vaultClose){

    vaultClose.addEventListener(
        "click",
        closeVault
    );

}


/*==================================================
  CLICK OUTSIDE
==================================================*/

if (vaultModalOverlay){

    vaultModalOverlay.addEventListener(
        "click",
        closeVault
    );

}


/*==================================================
  ESCAPE KEY
==================================================*/

document.addEventListener(
    "keydown",
    event => {


        if (
            !vaultModal ||
            !vaultModal.classList.contains("show")
        ){

            return;

        }


        if (event.key === "Escape"){

            closeVault();

        }

    }
);


/*==================================================
  SAFE HTML TEXT
==================================================*/

function escapeHTML(value){

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/*==================================================
  INITIALIZE
==================================================*/

if (
    document.readyState ===
    "loading"
){

    document.addEventListener(
        "DOMContentLoaded",
        renderVault
    );

}

else{

    renderVault();

}


console.log(
    "🔐 Memory Vault Loaded Successfully"
);