// ==========================================================
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
