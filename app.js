document.addEventListener('DOMContentLoaded',()=>{
  const body=document.body, modal=document.querySelector('.modal'), menu=document.querySelector('.menu'), nav=document.querySelector('.header nav'), email=document.querySelector('#email'), form=document.querySelector('.cta form'), message=document.querySelector('.form-msg');
  const open=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');body.style.overflow='hidden';setTimeout(()=>modal.querySelector('.close').focus(),60)};
  const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');body.style.overflow=''};
  document.querySelectorAll('[data-buy]').forEach(el=>el.addEventListener('click',open));
  document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))close()});
  modal.querySelector('.close').addEventListener('click',close);
  modal.querySelector('[data-focus]').addEventListener('click',()=>{close();setTimeout(()=>email.focus(),300)});
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');menu.setAttribute('aria-expanded',String(open))});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));
  form.addEventListener('submit',e=>{e.preventDefault();if(!email.value.trim())return;message.textContent='已记录，我们会在支付与下载上线时通知你。';form.reset()});
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.fade').forEach(el=>observer.observe(el));
});