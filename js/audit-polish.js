/* ATIRA'S JOURNEY — audit report polish behavior */
(function(){
  'use strict';

  const path = (window.location.pathname || '').toLowerCase();
  const page = path.split('/').pop() || 'index.html';
  document.body && document.body.classList.add('audit-' + page.replace(/\.html$/,'').replace(/[^a-z0-9_-]/g,''));

  const addPageClass = () => {
    if(!document.body) return;
    document.body.classList.add('audit-' + page.replace(/\.html$/,'').replace(/[^a-z0-9_-]/g,''));
  };

  function formatTime(seconds){
    if(!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2,'0');
    return m + ':' + s;
  }

  function cleanDefaultTags(root){
    (root || document).querySelectorAll('.gallery-category,.timeline-card-category').forEach(tag=>{
      const value = (tag.textContent || '').trim().toLowerCase();
      if(value === 'normal' || value === 'memory'){
        tag.setAttribute('data-default-tag','true');
      }
    });
  }

  function hideTemplateCaptions(root){
    (root || document).querySelectorAll('.gallery-overlay p,.timeline-card-description').forEach(el=>{
      const text = (el.textContent || '').trim().toLowerCase();
      if(text === 'captured with love.' || text === 'smiles that last forever.'){
        el.classList.add('audit-template-caption');
        el.setAttribute('aria-hidden','true');
      }
    });
  }

  function applyNaturalRatios(root){
    if(!document.body.classList.contains('audit-gallery')) return;
    (root || document).querySelectorAll('.gallery-item').forEach(card=>{
      const media = card.querySelector('img,video');
      if(!media) return;
      const setRatio = ()=>{
        const w = media.naturalWidth || media.videoWidth;
        const h = media.naturalHeight || media.videoHeight;
        if(w && h) card.style.aspectRatio = w + ' / ' + h;
      };
      if(media.tagName === 'VIDEO') media.addEventListener('loadedmetadata',setRatio,{once:true});
      else if(media.complete) setRatio();
      else media.addEventListener('load',setRatio,{once:true});
    });
  }

  function enhanceVideoCards(root){
    if(!document.body.classList.contains('audit-videos')) return;
    (root || document).querySelectorAll('#videoGrid .gallery-item, #videoGrid article').forEach(card=>{
      if(card.querySelector('.audit-video-duration')) return;
      const video = card.querySelector('video');
      if(!video) return;
      const badge = document.createElement('span');
      badge.className = 'audit-video-duration';
      badge.textContent = '…';
      badge.setAttribute('aria-label','Video duration loading');
      card.appendChild(badge);
      const update = ()=>{
        badge.textContent = formatTime(video.duration);
        badge.setAttribute('aria-label','Video duration ' + badge.textContent);
      };
      if(Number.isFinite(video.duration) && video.duration > 0) update();
      else video.addEventListener('loadedmetadata',update,{once:false});
    });
  }

  function fixMusicDuration(){
    if(!document.body.classList.contains('audit-music')) return;
    const audio = document.getElementById('audioPlayer');
    const duration = document.getElementById('duration');
    if(!audio || !duration) return;
    const update = ()=>{
      if(Number.isFinite(audio.duration) && audio.duration > 0){
        duration.textContent = formatTime(audio.duration);
        duration.classList.add('audit-duration-ready');
      }
    };
    audio.addEventListener('loadedmetadata',update);
    audio.addEventListener('durationchange',update);
    audio.addEventListener('canplay',update);
    update();
  }

  function refreshDynamicPages(){
    cleanDefaultTags();
    hideTemplateCaptions();
    applyNaturalRatios();
    enhanceVideoCards();
    fixMusicDuration();
  }

  function start(){
    addPageClass();
    refreshDynamicPages();
    const observer = new MutationObserver(mutations=>{
      let changed = false;
      for(const mutation of mutations){
        if(mutation.addedNodes && mutation.addedNodes.length){ changed = true; break; }
      }
      if(changed){
        refreshDynamicPages();
      }
    });
    observer.observe(document.body,{childList:true,subtree:true});
    window.setTimeout(refreshDynamicPages,250);
    window.setTimeout(refreshDynamicPages,1000);
    window.setTimeout(refreshDynamicPages,2500);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();