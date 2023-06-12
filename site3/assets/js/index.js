// ========================Nvigation==================================

let toggle=document.getElementById('toggle');
let menuList=document.querySelector('.menuList');
let shop=document.getElementById('shop');
let shopMenu=document.getElementById('shopMenu');

toggle.addEventListener('click',()=>{
    if(menuList.style.maxHeight){
        menuList.style.maxHeight=null;
    }else{
        menuList.style.maxHeight=menuList.scrollHeight+shopMenu.scrollHeight+'px';
    }
})
shop.addEventListener('click',()=>{
    if(shopMenu.style.maxHeight){
        shopMenu.style.maxHeight=null;
    }else{
        shopMenu.style.maxHeight=shopMenu.scrollHeight+'px';
    }
})

let lis=document.getElementsByTagName('li');
for(let x=0;x<lis.length;x++){
    lis[x].onclick=function(e){e.stopPropagation();}
}
// ========================SLIDER==================================
let prev=document.getElementById('prev');
let slide=document.querySelector('.slide');
let dots=document.getElementById('dots');
let dot=document.getElementsByClassName('dot');
let texts=document.getElementById('text');

let i=0;
let slider=()=>{
    i++;
    if(i>2){i=0} 
     slide.style.backgroundImage =
      `url("assets/img/slider/slider-${i}.jpg")`; 
      clearDot() ;
      dot[i].classList.add('active');

}
prev.addEventListener('click',slider);
function clearDot(){
    for(let j=0;j<3;j++){
        dot[j].classList.remove('active');
        
    }}

    for(let n=0;n<3;n++){
        dot[n].onclick=function(){dotTarget(event)}

        function dotTarget(e){

           clearDot() ;
          e.target.classList.add('active');

        if(e.target==dots.childNodes[1]){ 
            slide.style.backgroundImage =
            `url("assets/img/slider/slider-${0}.jpg")`;
        }
        if(e.target==dots.childNodes[3]){
            slide.style.backgroundImage =
            `url("assets/img/slider/slider-${1}.jpg")`;
        }
        if(e.target==dots.childNodes[5]){
            slide.style.backgroundImage =
            `url("assets/img/slider/slider-${2}.jpg")`;
        }
        }

    }
    
    
//================================================================