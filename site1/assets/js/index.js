// navigation
const toggle = document.getElementsByClassName('toggle')[0];
const menu = document.getElementsByClassName('menu')[0];
const dropdown = document.getElementsByClassName('dropdown')[0];
const innerMenu1 = document.getElementsByClassName('inner-menu1')[0];
const innerMenu2 = document.getElementsByClassName('inner-menu2')[0];

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

let toggleMenu = () => {
    let windowWidth = window.innerWidth;
    dropdown.addEventListener('click', () => {
        if (windowWidth >= 768) {
            innerMenu1.classList.toggle('run1');
            innerMenu2.style.display = "none";

        } else {
            innerMenu2.classList.toggle('run2');
            innerMenu1.style.display = "none";
        }
    });
}

toggleMenu();
window.addEventListener('resize', toggleMenu);
