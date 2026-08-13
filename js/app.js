/*==================================================
    ATIRA'S JOURNEY
    app.js
    GLOBAL SITE JAVASCRIPT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector("main");
    if(mainContent && !mainContent.id) mainContent.id = "mainContent";

    if(!document.querySelector(".skip-link")){
        const skipLink=document.createElement("a");
        skipLink.className="skip-link"; skipLink.href="#mainContent"; skipLink.textContent="Skip to content";
        document.body.prepend(skipLink);
    }

    document.body.classList.add("page-ready");
    requestAnimationFrame(()=>document.body.classList.add("page-ready"));

    document.querySelectorAll("[data-current-year]").forEach(el=>el.textContent=new Date().getFullYear());

    const menuToggle=document.getElementById("menuToggle");
    const siteNav=document.getElementById("siteNav");
    if(menuToggle && siteNav){
        const closeMenu=()=>{siteNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label","Open navigation menu");menuToggle.textContent="☰";};
        menuToggle.addEventListener("click",()=>{const open=siteNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");menuToggle.textContent=open?"×":"☰";});
        siteNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
        document.addEventListener("click",e=>{if(!siteNav.contains(e.target)&&!menuToggle.contains(e.target))closeMenu();});
        document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu();});
    }

    const siteHeader=document.getElementById("siteHeader");
    if(siteHeader){
        const updateHeader=()=>siteHeader.classList.toggle("scrolled",window.scrollY>20);
        updateHeader(); window.addEventListener("scroll",updateHeader,{passive:true});
    }

    let backToTopButton=document.getElementById("backToTop");
    if(!backToTopButton){
        backToTopButton=document.createElement("button"); backToTopButton.id="backToTop"; backToTopButton.className="back-to-top"; backToTopButton.type="button"; backToTopButton.setAttribute("aria-label","Back to top"); backToTopButton.innerHTML="↑"; document.body.appendChild(backToTopButton);
    }
    const toggleBackToTop=()=>backToTopButton.classList.toggle("show",window.scrollY>500);
    toggleBackToTop(); window.addEventListener("scroll",toggleBackToTop,{passive:true});
    backToTopButton.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

    const currentPage=(window.location.pathname.split("/").pop()||"index.html").toLowerCase();
    document.querySelectorAll(".site-nav a").forEach(link=>{
        const href=link.getAttribute("href")||"";
        const linkPage=href.split("/").pop().toLowerCase();
        if(linkPage==="music.html"){
            link.remove();
            return;
        }
        link.classList.toggle("active",linkPage===currentPage);
    });
    document.querySelectorAll("a[href$=\"music.html\"]").forEach(link=>link.remove());

    function addStyle(href,id){
        if(document.getElementById(id)) return;
        const l=document.createElement("link"); l.id=id; l.rel="stylesheet"; l.href=href; document.head.appendChild(l);
    }
    function addScript(src,id){
        if(document.getElementById(id)) return;
        const s=document.createElement("script"); s.id=id; s.src=src; document.body.appendChild(s);
    }

    addStyle("css/site-music.css","siteMusicCSS");
    addStyle("css/memory-distribution.css","memoryDistributionCSS");
    addScript("js/site-music.js","siteMusicJS");

    const ensureMemories=()=>{
        if(Array.isArray(window.memories)){
            addScript("js/memory-distribution.js","memoryDistributionJS");
            return;
        }
        const s=document.createElement("script");
        s.src="data/memories.js";
        s.onload=()=>addScript("js/memory-distribution.js","memoryDistributionJS");
        document.body.appendChild(s);
    };
    ensureMemories();

    console.log("ATIRA'S JOURNEY — Global App Loaded");
});