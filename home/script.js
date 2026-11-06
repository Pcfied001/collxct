(function(){
var cards=[].slice.call(document.querySelectorAll('.card')),ap=document.getElementById('ap'),nav=document.getElementById('nav');
var bg=['#059669','#0b1220','#b45309','#0d9488'],nb=['#0b2e2f','#0b1220','#2d1f18','#0b2e33'],i=0,t;
function show(){cards.forEach(function(c,k){var d=(k-i+4)%4;c.className=c.className.replace(/\b(act|l|r|x)\b/g,'').trim()+' '+(d===0?'act':d===1?'r':d===3?'l':'x');});
ap.style.background=bg[i];}
function go(n){i=(i+n+4)%4;show();}
document.getElementById('next').onclick=function(){go(1);reset()};
document.getElementById('prev').onclick=function(){go(-1);reset()};
function reset(){clearInterval(t);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t=setInterval(function(){go(1)},4500)}
show();reset();
})();
(function(){
var dash=document.querySelector('.dash');if(!dash)return;
var rows=[].slice.call(dash.querySelectorAll('.row'));
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(reduce){dash.classList.add('done');rows.forEach(function(r){r.classList.add('show')});}
else{
var timers=[];function at(f,ms){timers.push(setTimeout(f,ms))}
function cycle(){
 dash.classList.remove('done');rows.forEach(function(r){r.classList.remove('show')});
 var step=900,start=500;
 rows.forEach(function(r,k){at(function(){r.classList.add('show')},start+k*step)});
 var allIn=start+rows.length*step+300;
 at(function(){dash.classList.add('done')},allIn);
 var hold=allIn+2800;
 at(function(){dash.classList.remove('done')},hold);
 rows.slice().reverse().forEach(function(r,k){at(function(){r.classList.remove('show')},hold+300+k*350)});
 at(cycle,hold+300+rows.length*350+700);
}
cycle();
}
var maxMove=7,maxTilt=3,tx=0,ty=0,cx=0,cy=0,raf=null;
function frame(){
 cx+=(tx-cx)*0.08;cy+=(ty-cy)*0.08;
 dash.style.transform='perspective(1000px) translate3d('+(cx*maxMove).toFixed(2)+'px,'+(cy*maxMove).toFixed(2)+'px,0) rotateX('+(-cy*maxTilt).toFixed(2)+'deg) rotateY('+(cx*maxTilt).toFixed(2)+'deg)';
 if(Math.abs(tx-cx)<.001&&Math.abs(ty-cy)<.001&&tx===0&&ty===0){dash.style.transform='';raf=null;return;}
 raf=requestAnimationFrame(frame);
}
function kick(){if(!raf)raf=requestAnimationFrame(frame);}
function move(x,y){var b=dash.getBoundingClientRect();
 tx=Math.max(-1,Math.min(1,(x-(b.left+b.width/2))/(b.width/2)));
 ty=Math.max(-1,Math.min(1,(y-(b.top+b.height/2))/(b.height/2)));kick();}
function leave(){tx=0;ty=0;kick();}
if(!reduce){
dash.addEventListener('pointermove',function(e){move(e.clientX,e.clientY)});
dash.addEventListener('pointerleave',leave);
dash.addEventListener('pointercancel',leave);
dash.addEventListener('pointerup',function(e){if(e.pointerType!=='mouse')leave()});
}
})();
(function(){var d=document.querySelector('.dash'),c=document.getElementById('amtChip'),r=d&&d.querySelector('.row'),a=r&&r.querySelector('.r');
if(!d||!c||!a)return;
function place(){if(getComputedStyle(c).display==='none')return;
 c.style.right='-34px';
 c.style.top=(r.offsetTop-c.offsetHeight+12)+'px';}
place();addEventListener('resize',place);addEventListener('load',place);
})();
(function(){var k=document.querySelector('.k2');if(!k)return;
var rows=[].slice.call(k.querySelectorAll('.dk'));
if(matchMedia('(prefers-reduced-motion:reduce)').matches){k.classList.add('static');return;}
function cycle(){
 rows.forEach(function(r,i){setTimeout(function(){r.classList.remove('off');r.classList.add('on')},500+i*850)});
 var hold=500+rows.length*850+2200;
 rows.forEach(function(r,i){setTimeout(function(){r.classList.remove('on');r.classList.add('off')},hold+i*650)});
 var end=hold+rows.length*650+900;
 setTimeout(function(){rows.forEach(function(r){r.style.transition='none';r.classList.remove('off','on')});
  void k.offsetWidth;rows.forEach(function(r){r.style.transition=''});cycle()},end);
}
cycle();
})();
(function(){var bars=[].slice.call(document.querySelectorAll('.k4 .bars i'));if(!bars.length)return;
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var sets=[[45,70,30,38,18],[62,48,78,58,86],[38,66,52,82,68],[72,54,90,46,60],[50,76,42,64,92]],n=0;
setInterval(function(){n=(n+1)%sets.length;bars.forEach(function(b,i){b.style.height=sets[n][i]+'%'})},2400);
})();
