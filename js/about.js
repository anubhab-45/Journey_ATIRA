/*========================================
  ATIRA'S JOURNEY
  about.js
========================================*/

const relationshipStart = new Date("2025-08-14T00:00:00");

function getCounterElement(id, fallbackId) {
    return document.getElementById(id) || document.getElementById(fallbackId);
}

const daysElement = getCounterElement("loveDays", "counterDays");
const hoursElement = getCounterElement("loveHours", "counterHours");
const minutesElement = getCounterElement("loveMinutes", "counterMinutes");
const secondsElement = getCounterElement("loveSeconds", "counterSeconds");
const aboutDaysStat = document.querySelector(".about-stat-number[data-countup-days]");

function loadAboutFixStyles() {
    if (document.getElementById("aboutFixStyles")) return;
    const link = document.createElement("link");
    link.id = "aboutFixStyles";
    link.rel = "stylesheet";
    link.href = "css/about-fix.css";
    document.head.appendChild(link);
}

function getRelationshipParts() {
    const difference = Math.max(0, Date.now() - relationshipStart.getTime());
    const totalSeconds = Math.floor(difference / 1000);
    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60
    };
}

function updateLoveCounter() {
    const { days, hours, minutes, seconds } = getRelationshipParts();
    if (daysElement) daysElement.textContent = String(days);
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, "0");
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, "0");
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, "0");
    if (aboutDaysStat) aboutDaysStat.textContent = String(days);
}

function animateStatCounter(element) {
    if (!element) return;
    const target = Number(element.dataset.count);
    if (!Number.isFinite(target)) return;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = String(Math.floor(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
        else element.textContent = String(target);
    }
    requestAnimationFrame(tick);
}

function initStatCounters() {
    const counters = document.querySelectorAll(".about-stat-number[data-count]");
    counters.forEach(counter => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStatCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });
        observer.observe(counter);
    });
}

function initReveal() {
    const revealElements = document.querySelectorAll(
        ".about-hero-card, .about-story-card, .about-stat-card, .about-purpose-card, .about-counter-card, .about-promise-card, .about-final-card"
    );
    if (!revealElements.length) return;
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("about-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealElements.forEach(element => {
        element.classList.add("about-reveal");
        revealObserver.observe(element);
    });
}

function checkAnniversary() {
    const now = new Date();
    if (now.getMonth() === 7 && now.getDate() === 14) {
        document.body.classList.add("anniversary-day");
        createHearts();
    }
}

function createHearts() {
    const heartContainer = document.createElement("div");
    heartContainer.className = "anniversary-hearts";
    document.body.appendChild(heartContainer);
    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");
        heart.textContent = "❤";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 4 + "s";
        heart.style.animationDuration = 5 + Math.random() * 5 + "s";
        heartContainer.appendChild(heart);
    }
}

function initAboutPage() {
    loadAboutFixStyles();
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
    initStatCounters();
    initReveal();
    checkAnniversary();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAboutPage, { once: true });
} else {
    initAboutPage();
}