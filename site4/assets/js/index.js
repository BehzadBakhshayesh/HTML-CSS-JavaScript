// ====================================================
// WEATHER
// ====================================================
let day =document.querySelectorAll('.day');
let iconW=document.querySelectorAll('.iconW');
let deg=document.querySelectorAll('.deg');
let i0,i1,i2,d0,d1,d2;

let removeDayColor=()=>{
    for(let i=0;i<day.length;i++){
        day[i].classList.remove('active')
    }
}
let addEventDay=()=>{
    for(let j=0;j<day.length;j++){
        day[j].addEventListener('click',()=>{
            removeDayColor();
            day[j].classList.add('active'); 
              
            let datContext=day[j].textContent;
            switch(datContext){
                case 'دوشنبه':{
                    i0="<i class=\'fas fa-sun\'></i>";
                    i1="<i class=\'fas fa-cloud-sun\'></i>";
                    i2="<i class=\'fas fa-cloud-rain\'></i>";
                    d0="32°C";
                    d1="26°C";
                    d2="21°C";
                    break;
                }
                case ' سه شنبه ':{
                    i0="<i class=\'far fa-snowflake\'></i>";
                    i1="<i class=\'fas fa-sun\'></i>";
                    i2="<i class=\'fas fa-cloud-sun\'></i>";
                    d0="18°C";
                    d1="34°C";
                    d2="24°C";
                    break;
                }
                case 'چهارشنبه':{
                    i0="<i class=\'fas fa-cloud-sun\'></i>";
                    i1="<i class=\'fas fa-cloud-rain\'></i>";
                    i2="<i class=\'fas fa-sun\'></i>";
                    d0="28°C";
                    d1="20°C";
                    d2="31°C";
                    break;
                }
                case ' پنج شنبه ':{
                    i0="<i class=\'fas fa-sun\'></i>";
                    i1="<i class=\'fas fa-cloud-sun\'></i>";
                    i2="<i class=\'far fa-snowflake\'></i>";
                    d0="33°C";
                    d1="27°C";
                    d2="19°C";
                    break;
                }
                case 'جمعه':{
                    i0="<i class=\'fas fa-cloud-rain\'></i>";
                    i1="<i class=\'fas fa-sun\'></i>";
                    i2="<i class=\'fas fa-cloud-sun\'></i>";
                    d0="23°C";
                    d1="31°C";
                    d2="25°C";
                }
            }
            iconW[0].innerHTML=i0;
            iconW[1].innerHTML=i1;
            iconW[2].innerHTML=i2;
            deg[0].textContent=d0;
            deg[1].textContent=d1;
            deg[2].textContent=d2;
 
        })
    }
}

addEventDay();

// ====================================================
// TAB
// ====================================================
let tabListItem=document.querySelectorAll('.tabListItem');
let tabContainerItem=document.querySelectorAll('.tabContainerItem');

let clearTabs=()=>{
    for(let i=0;i<tabContainerItem.length;i++){
        tabContainerItem[i].classList.remove('activeTab');
    }
}
let removeListColor=()=>{
    for(let z=0;z<tabListItem.length;z++){
        tabListItem[z].classList.remove('activlist')
    }
}
let addEvevtListItem=()=>{
    for(let j=0;j<tabListItem.length;j++){
        tabListItem[j].addEventListener('click',()=>{
            clearTabs();
            removeListColor()
            tabContainerItem[j].classList.add('activeTab');
            tabListItem[j].classList.add('activlist')
        })
    }
}
addEvevtListItem();
// ====================================================
// 
// ====================================================