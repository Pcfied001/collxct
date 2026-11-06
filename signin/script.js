(function(){
var f=document.getElementById('siForm'),m=document.getElementById('siMsg'),e=document.getElementById('siEmail');
e.focus({preventScroll:true});
f.addEventListener('submit',function(ev){ev.preventDefault();
 var em=e.value.trim(),pw=document.getElementById('siPass').value;
 m.style.color='#b45309';
 if(!em||!pw){m.textContent='Enter your email and password.';return;}
 m.textContent='Sign-in is not available yet.';});
})();
