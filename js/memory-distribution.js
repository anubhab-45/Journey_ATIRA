/* ATIRA'S JOURNEY — distributed memory rails */
(function(){
  'use strict';
  const buckets={
    'index.html':0,'':0,'dashboard.html':1,'gallery.html':2,
    'timeline.html':3,'letters.html':4,'about.html':5,'vault.html':6
  };
  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const bucket=buckets[page];
  if(bucket===undefined) return;
  function init(){
    if(!Array.isArray(window.memories)) return;
    const photos=window.memories.filter(x=>x && String(x.type||'photo').toLowerCase()==='photo');
    const items=photos.filter((_,i)=>i%7===bucket);
    if(!items.length || document.querySelector('.distributed-memory-rail')) return;
    const main=document.querySelector('main')||document.body;
    const section=document.createElement('section');
    section.className='distributed-memory-section';
    section.innerHTML='<div class="container"><div class="distributed-memory-heading"><span>FROM OUR JOURNEY</span><h2>A Few Moments, Kept Close</h2></div><div class="distributed-memory-rail" aria-label="Memories from our journey"></div></div>';
    const rail=section.querySelector('.distributed-memory-rail');
    items.forEach((item)=>{
      const card=document.createElement('button');
      card.type='button'; card.className='distributed-memory-card';
      card.innerHTML=`<img src="${item.src||''}" alt="${item.title||'Memory'}" loading="lazy"><span>${item.date||''}</span>`;
      card.addEventListener('click',()=>{
        const src=item.src||'';
        const overlay=document.createElement('div'); overlay.className='distributed-memory-viewer';
        overlay.innerHTML=`<button type="button" aria-label="Close">×</button><img src="${src}" alt="${item.title||'Memory'}"><div>${item.title||'A beautiful memory'}${item.date?` · ${item.date}`:''}</div>`;
        const close=()=>overlay.remove(); overlay.querySelector('button').onclick=close; overlay.onclick=e=>{if(e.target===overlay)close()}; document.body.appendChild(overlay);
      });
      rail.appendChild(card);
    });
    main.appendChild(section);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();