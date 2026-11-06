(function(){var f=document.getElementById('suForm');if(!f)return;
var org=document.getElementById('suOrg'),slug=document.getElementById('suSlug'),prev=document.getElementById('suSlugPrev'),m=document.getElementById('suMsg'),touched=false;
org.focus({preventScroll:true});
function clean(v){return v.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}
org.addEventListener('input',function(){if(!touched){slug.value=clean(org.value);}prev.textContent=slug.value||'your-slug'});
slug.addEventListener('input',function(){touched=true;slug.value=slug.value.toLowerCase().replace(/[^a-z0-9-]/g,'');prev.textContent=slug.value||'your-slug'});
f.addEventListener('submit',function(e){e.preventDefault();m.style.color='#b45309';
 var v=function(id){return document.getElementById(id).value.trim()};
 if(!v('suOrg')||!v('suSlug')||!v('suOrgEmail')||!v('suFn')||!v('suLn')||!v('suEmail')){m.textContent='Please fill in the organization and admin details.';return;}
 if(v('suPw').length<8){m.textContent='Password must be at least 8 characters.';return;}
 m.textContent='Sign-up is not available yet.';});
})();
