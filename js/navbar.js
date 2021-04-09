import { closeBack, } from './script.js';

const navList = document.querySelector(".nav-list");
const openMenu = document.querySelector("#img-toggle"); //Hamburguer img
const closeMenu = document.querySelector("#img-close");// X img
const overlay = document.querySelector('#overlay');


openMenu.onclick = openNavList;
closeMenu.onclick = closeNavList;

overlay.addEventListener("click", () => {
  closeNavList();
  closeBack();
});

function openNavList() {
  navList.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  overlay.classList.add('active');
}

function closeNavList() {
  navList.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  overlay.classList.remove('active');
}

const navLink = document.querySelectorAll('.nav-link');
function menuClicked() {
  for (let link of navLink) {
    link.addEventListener('click', () => {
      alert(`${link.textContent} was clicked`);
    })
  }
}

export {openNavList, closeNavList,menuClicked, overlay}