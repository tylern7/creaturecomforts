const b=document.querySelector('.burger'),m=document.getElementById('menu');
b.addEventListener('click',()=>{const o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',!o);m.classList.toggle('open',!o);});
m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{b.setAttribute('aria-expanded','false');m.classList.remove('open');}));
document.getElementById('contact-form').addEventListener('submit',e=>{const f=e.target;if(!f.checkValidity()){e.preventDefault();f.reportValidity();return;}
e.preventDefault();const d=new FormData(f);const body=`Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\n${d.get('message')}`;
location.href='mailto:info@creaturecomfortshvac.ca?subject='+encodeURIComponent('Website enquiry')+'&body='+encodeURIComponent(body);
f.querySelector('.form-msg').textContent='Opening your email app to send your message…';});
