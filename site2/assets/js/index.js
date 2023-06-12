// *****************navigation********************
let menu=document.getElementById('menu');
let toggle=document.getElementById('toggle');

toggle.addEventListener("click",()=>{
   if(menu.style.maxHeight){
       menu.style.maxHeight=null;  
   }else{ menu.style.maxHeight=menu.scrollHeight+'px'; }
})
// *********************MODAL*******************************
let container=document.getElementsByClassName('container');
let modalBack=document.querySelector('.modalBack');
let innerModal=document.querySelector('.innerModal');
let image=document.querySelectorAll('.image');

let modalHeader=document.getElementById('modalHeader');
let modalImg=document.getElementById('modalImg');
let modalMain=document.getElementById('modalMain');
let modalFooter=document.getElementById('modalFooter');
let closeModal=document.getElementById('close');

for(let j=0;j<container.length;j++){
    container[j].onclick=function(){showModal(this)};     
}
function showModal(container){
    modalBack.style.display='block'
    innerModal.style.display='block' 
    modalHeader.innerHTML=container.childNodes[1].childNodes[3].innerHTML;
    modalImg.src=container.childNodes[1].childNodes[1].src; 
    calcPos();
}
function calcPos() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let IMW=innerModal.getBoundingClientRect().width; //imw= inner modal width
    // let IMH=innerModal.getBoundingClientRect().height //imh = inner modal height
    innerModal.style.left = (w-IMW)/2 + 'px';
    // innerModal.style.top = (h-IMH)/2 + 'px';
}
window.addEventListener('resize', calcPos)
modalBack.addEventListener('click',()=>{
    modalBack.style.display='none'
    innerModal.style.display='none'
})
closeModal.addEventListener('click',()=>{
    modalBack.style.display='none'
    innerModal.style.display='none'
})
// **************************smooth scroll to up******************************
let smoothScrool=document.getElementById('smoothScrool');

window.addEventListener('scroll',()=>{
    let pageHeight=window.pageYOffset;
    if(pageHeight>300){
        smoothScrool.style.display='flex'
    }else{
        smoothScrool.style.display='none'
    }
})
smoothScrool.addEventListener('click', ()=> {
    let start;
    const location = window.pageYOffset; 
    const distance = -location;             
    const duration = location * 0.35;     

    function scrollToTop(time) {
      if (!start) {start = time};
      const elapsed = time - start;
      window.scrollTo(0, location + distance * (elapsed / duration));
      if (elapsed < duration) requestAnimationFrame(scrollToTop);
    }
    
    requestAnimationFrame(scrollToTop);
  });


 

