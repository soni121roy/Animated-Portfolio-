// Scroll reveal animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('show');
  });
},{threshold:0.1});
document.querySelectorAll('.anim').forEach(el=>observer.observe(el));