/*==================================================
    ATIRA'S JOURNEY
    app.js
    GLOBAL SITE JAVASCRIPT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {


    /*==================================================
        ACCESSIBILITY + PAGE ENTRY
    ==================================================*/

    const mainContent = document.querySelector("main");

    if(mainContent && !mainContent.id){

        mainContent.id = "mainContent";

    }


    if(!document.querySelector(".skip-link")){

        const skipLink = document.createElement("a");

        skipLink.className = "skip-link";

        skipLink.href = "#mainContent";

        skipLink.textContent = "Skip to content";

        document.body.prepend(skipLink);

    }


    document.body.classList.add("page-ready");

    requestAnimationFrame(() => {

        document.body.classList.add("page-ready");

    });


    /*==================================================
        CURRENT YEAR
    ==================================================*/

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    const currentYear =
        new Date().getFullYear();


    yearElements.forEach(element => {

        element.textContent =
            currentYear;

    });



    /*==================================================
        MOBILE MENU
    ==================================================*/

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );


    const siteNav =
        document.getElementById(
            "siteNav"
        );


    if(menuToggle && siteNav){

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    siteNav.classList.toggle(
                        "open"
                    );


                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                menuToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                );


                menuToggle.textContent =
                    isOpen
                        ? "×"
                        : "☰";

            }
        );


        /*----------------------------------------------
            CLOSE AFTER CLICKING A LINK
        ----------------------------------------------*/

        siteNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        siteNav.classList.remove(
                            "open"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation menu"
                        );


                        menuToggle.textContent =
                            "☰";

                    }
                );

            });


        /*----------------------------------------------
            CLOSE WHEN CLICKING OUTSIDE
        ----------------------------------------------*/

        document.addEventListener(
            "click",
            event => {

                if(
                    !siteNav.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ){

                    siteNav.classList.remove(
                        "open"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );


                    menuToggle.textContent =
                        "☰";

                }

            }
        );


        /*----------------------------------------------
            CLOSE WITH ESCAPE
        ----------------------------------------------*/

        document.addEventListener(
            "keydown",
            event => {

                if(
                    event.key === "Escape" &&
                    siteNav.classList.contains("open")
                ){

                    siteNav.classList.remove(
                        "open"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );


                    menuToggle.textContent =
                        "☰";

                }

            }
        );

    }



    /*==================================================
        HEADER SCROLL EFFECT
    ==================================================*/

    const siteHeader =
        document.getElementById(
            "siteHeader"
        );


    if(siteHeader){

        const updateHeader =
            () => {

                if(window.scrollY > 20){

                    siteHeader.classList.add(
                        "scrolled"
                    );

                }else{

                    siteHeader.classList.remove(
                        "scrolled"
                    );

                }

            };


        updateHeader();


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive:true
            }
        );

    }



    /*==================================================
        BACK TO TOP BUTTON
    ==================================================*/

    let backToTopButton = document.getElementById("backToTop");

    if(!backToTopButton){

        backToTopButton = document.createElement("button");

        backToTopButton.id = "backToTop";

        backToTopButton.className = "back-to-top";

        backToTopButton.type = "button";

        backToTopButton.setAttribute("aria-label", "Back to top");

        backToTopButton.innerHTML = "↑";

        document.body.appendChild(backToTopButton);

    }


    const toggleBackToTop = () => {

        if(window.scrollY > 500){

            backToTopButton.classList.add("show");

        }else{

            backToTopButton.classList.remove("show");

        }

    };


    toggleBackToTop();


    window.addEventListener(
        "scroll",
        toggleBackToTop,
        {
            passive:true
        }
    );


    backToTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        }
    );


    /*==================================================
        ACTIVE NAVIGATION
    ==================================================*/

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    const navLinks =
        document.querySelectorAll(
            ".site-nav a"
        );


    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");


        if(!href){

            return;

        }


        const linkPage =
            href
                .split("/")
                .pop()
                .toLowerCase();


        link.classList.remove(
            "active"
        );


        if(
            linkPage === currentPage
        ){

            link.classList.add(
                "active"
            );

        }

    });



    /*==================================================
        CONSOLE
    ==================================================*/

    console.log(
        "ATIRA'S JOURNEY — Global App Loaded"
    );

});