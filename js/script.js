const back = document.querySelector("#btn-back");
const modal = document.querySelector(".modal");

back.addEventListener("click", function () {
  console.log("chamando evento");
});

function toggle() {
  if (modal.style.display == "none") {
    modal.style.display = "visible";
  } else {
    modal.style.display = "none";
  }
}



// Functions to navbar
const navList = document.querySelector(".nav-list");
const openMenu = document.querySelector("#img-toggle"); //Hamburguer img
const closeMenu = document.querySelector("#img-close");// X img
const overlay = document.querySelector('#overlay');

openMenu.addEventListener("click",openNavList);
closeMenu.addEventListener("click", closeNavList);
overlay.addEventListener("click", closeNavList);

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

function menuClicked(event) { //check if menu link is working
  alert(`${event.target.textContent} was clicked`);
}
