import {overlay} from "./navbar.js"

// MODAL
const btnBack = document.querySelector("#btn-back");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector('#modalCloseBtn');


btnBack.onclick = openBack;
modalCloseBtn.onclick = closeBack;

// open clas modal
function openBack() {
    overlay.classList.add('active');
    modal.style.visibility = "visible";
}

function closeBack() {
  modal.style.visibility = "hidden";
  overlay.classList.remove('active');
}

// END MODAL

// Modal Succes div
const success = document.querySelector('#success');

function openSucces() {
  success.style.visibility = "visible";
  modal.style.visibility = "hidden";
  // overlay.setAttribute('zIndex', '9');
  overlay.classList.add("active");
}

function closeSuccess() {
  success.style.visibility = "hidden";
  overlay.classList.remove('active');
}
// End modal Succes div

export {openBack, closeBack, openSucces, closeSuccess}