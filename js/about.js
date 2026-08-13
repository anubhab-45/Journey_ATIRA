const relationshipStart = new Date("2025-08-14T00:00:00");

function getRelationshipParts() {
    const elapsed = Math.max(0, Date.now() - relationshipStart.getTime());
    const totalSeconds = Math.floor(elapsed / 1000);
    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60
    };
}

function updateLoveCounter() {
    const { days, hours, minutes, seconds } = getRelationshipParts();
    const ids = {
        counterDays: String(days),
        counterHours: String(hours).padStart(2, "0"),
        counterMinutes: String(minutes).padStart(2, "0"),
        counterSeconds: String(seconds).padStart(2, "0"),
        daysTogether: String(days),
        exactCounter: `${days} days, ${String(hours).padStart(2, "0")} hours, ${String(minutes).padStart(2, "0")} minutes, ${String(seconds).padStart(2, "0")} seconds`
    };
    Object.entries(ids).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

function animateStat(element) {
    if (!element || element.dataset.animated === "true") return;
    const target = Number(element.dataset.count);
    if (!Number.isFinite(target)) return;
    element.dataset.animated = "true";
    const start = performance.now();
    function tick(now) {
        const progress = Math.min(1, (now - start) / 1200);
        element.textContent = String(Math.floor(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
        else element.textContent = String(target);
    }
    requestAnimationFrame(tick);
}

function initAboutPage() {
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
    document.querySelectorAll(".stat-number[data-count]").forEach(animateStat);
}

document.addEventListener("DOMContentLoaded", initAboutPage, { once: true });
