/*========================================
  ATIRA'S JOURNEY
  about.js
========================================*/


/*========================================
  LOVE COUNTER
  START: 14 AUGUST 2025
========================================*/

const relationshipStart =
    new Date("2025-08-14T00:00:00");


const daysElement =
    document.getElementById("loveDays");

const hoursElement =
    document.getElementById("loveHours");

const minutesElement =
    document.getElementById("loveMinutes");

const secondsElement =
    document.getElementById("loveSeconds");


function updateLoveCounter() {

    const now = new Date();

    let difference =
        now.getTime() -
        relationshipStart.getTime();


    /*------------------------------------
      Safety check
    ------------------------------------*/

    if (difference < 0) {

        difference = 0;

    }


    /*------------------------------------
      Calculate time
    ------------------------------------*/

    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    /*------------------------------------
      Display
    ------------------------------------*/

    if (daysElement) {

        daysElement.textContent =
            days;

    }


    if (hoursElement) {

        hoursElement.textContent =
            String(hours).padStart(2, "0");

    }


    if (minutesElement) {

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

    }


    if (secondsElement) {

        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }

}


/*========================================
  START COUNTER
========================================*/

updateLoveCounter();

setInterval(
    updateLoveCounter,
    1000
);


/*========================================
  SCROLL REVEAL
========================================*/

const revealElements =
    document.querySelectorAll(
        ".about-section, .hero-box, .counter-box, .little-card, .dreams-box, .quote-box"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "about-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    element.classList.add(
        "about-reveal"
    );

    revealObserver.observe(
        element
    );

});


/*========================================
  ANNIVERSARY CHECK
========================================*/

function checkAnniversary() {

    const now = new Date();

    const month =
        now.getMonth();

    const date =
        now.getDate();


    /*
      August = 7
      Anniversary = 14 August
    */

    if (
        month === 7 &&
        date === 14
    ) {

        document.body.classList.add(
            "anniversary-day"
        );

        createHearts();

    }

}


checkAnniversary();


/*========================================
  HEART EFFECT
========================================*/

function createHearts() {

    const heartContainer =
        document.createElement("div");

    heartContainer.className =
        "anniversary-hearts";

    document.body.appendChild(
        heartContainer
    );


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const heart =
            document.createElement("span");

        heart.textContent = "❤";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDelay =
            Math.random() * 4 + "s";

        heart.style.animationDuration =
            5 + Math.random() * 5 + "s";

        heartContainer.appendChild(
            heart
        );

    }

}


/*========================================
  CONSOLE
========================================*/

console.log(
    "ATIRA'S JOURNEY — About Page Loaded"
);

console.log(
    "Together since 14 August 2025 ❤️"
);