(function(){
  try{
    if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    document.documentElement.classList.add('js');
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:.12});
    document.querySelectorAll('.proj,.cols>div,.contact p,.contact .btns').forEach(function(el){io.observe(el);});
  }catch(err){document.documentElement.classList.remove('js');}
})();
