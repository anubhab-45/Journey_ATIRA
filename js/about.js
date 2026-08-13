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

function updateLoveCounter() {
    const now = new Date();
    const difference = Math.max(0, now.getTime() - relationshipStart.getTime());
    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (daysElement) daysElement.textContent = String(days);
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, "0");
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, "0");
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, "0");
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
    if (!counters.length) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    counters.forEach(counter => observer.observe(counter));
}

function initReveal() {
    const revealElements = document.querySelectorAll(
        ".about-section, .hero-box, .counter-box, .little-card, .dreams-box, .quote-box, .about-stat-card, .about-purpose-card"
    );
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("about-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

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
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
    initStatCounters();
    initReveal();
    checkAnniversary();

    console.log("ATIRA'S JOURNEY — About Page Loaded");
    console.log("Together since 14 August 2025 ❤️");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAboutPage, { once: true });
} else {
    initAboutPage();
}
