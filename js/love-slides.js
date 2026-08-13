document.addEventListener('DOMContentLoaded',function(){
  const stage=document.getElementById('loveStage');
  if(!stage||!Array.isArray(window.memories)) return;
  const bucket=2;
  const items=window.memories.filter(x=>x&&String(x.type||'photo').toLowerCase()==='photo').filter((_,i)=>i%7===bucket);
  if(!items.length) return;
  let index=0,startX=0;
  const bg=document.getElementById('loveStageBg'),img=document.getElementById('loveSlideImage'),title=document.getElementById('loveSlideTitle'),date=document.getElementById('loveSlideDate'),counter=document.getElementById('loveCounter'),bar=document.getElementById('loveProgressBar');
  function show(i){index=(i+items.length)%items.length;const m=items[index];img.src=m.src||'';img.alt=m.title||'Memory';title.textContent=m.title||'A beautiful memory';date.textContent=m.date||'';counter.textContent=`${index+1} / ${items.length}`;bar.style.width=`${((index+1)/items.length)*100}%`;bg.style.backgroundImage=`url("${(m.src||'').replace(/"/g,'\\"')}")`;}
  function next(){show(index+1)} function prev(){show(index-1)}
  document.getElementById('loveNext').onclick=next;document.getElementById('lovePrev').onclick=prev;
  document.getElementById('loveFirst').onclick=()=>show(0);
  document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev();});
  img.addEventListener('touchstart',e=>{startX=e.changedTouches[0].screenX},{passive:true});
  img.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-startX;if(Math.abs(dx)>45)(dx<0?next:prev)()},{passive:true});
  show(0);
});