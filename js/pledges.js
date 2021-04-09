import { openSucces } from "./script.js" 
export {radioChange}
// Change status of radio content div
const radios = document.getElementsByName("radio"); //return a NodeList
const backFooters = document.getElementsByClassName("toggle-footer");
const pledgeValue = document.getElementsByName('pledge-value');

const btnContinue = document.querySelectorAll('.btn-continue');

function radioChange() {
  for(var i = 0; i < radios.length; i++) {
    // return the closest PARENT div with class .modal-card
    let parentDiv = radios[i].closest(".modal-card");
    
    if (radios[i].checked) {
      // add class .selected to parent div
      parentDiv.classList.add("selected");
      backFooters[i].classList.remove("hidden"); //default = hidden
      var inputValue = pledgeValue[i];
      let minValue = inputValue.getAttribute('min');
      let maxValue = inputValue.getAttribute('max');

      console.log(`minimum value: ${minValue} 
max value: ${maxValue}`);
      // select the continue button inside the pledge div and add a event onclick
      btnContinue[i].addEventListener("click", function clickFunction() {
        if(inputValue.value < minValue || inputValue.value > maxValue) {
          alert(`the minimum value is: ${minValue} and the max value is: ${maxValue}`);
          return
        } else {
          let sum = 0;
          let totalBacked = document.querySelector('#totalBacked').innerHTML;
          totalBacked = parseFloat(totalBacked.replace(',','.'));
          inputValue = (parseFloat(inputValue.value) / 1000);
          sum = totalBacked + inputValue;
          document.querySelector('#totalBacked').innerHTML = sum.toLocaleString('en-US', {minimumFractionDigits: 3}).replace('.',',');
          openSucces();
        }
      });  
    } else {
      parentDiv.classList.remove("selected");
      backFooters[i].classList.add("hidden");
    }
  }
}


// function radioChange() {
//   for(const radio of radios){
//     if(radio.checked){
//       select(radio);
//       let btnContinue = radio.closest('.modal-card').querySelector(".btn-continue");
//       btnContinue.addEventListener('click', confirm(radio));
      
//     } else {
//       unselect(radio);
//     }
//   }
// }

// function confirm(radio) {
//   const pledgeValue = radio.closest('.modal-card').querySelector(".pledge-value");
//   if (pledgeValue.value < pledgeValue.min || pledgeValue.value > pledgeValue.max) {
//     console.log(typeof pledgeValue);
//     console.log(pledgeValue.value);
//     alert(`the minimum value is: ${pledgeValue.min} and the max value is: ${pledgeValue.max}`)
//     return;
//   } else {
//     let sum = 0;
//     let totalBacked = document.querySelector("#totalBacked").textContent;
//     totalBacked = parseFloat(totalBacked.replace(",", "."));
//     let floatPledgeValue = parseFloat(pledgeValue.value) / 1000;
//     sum = totalBacked + floatPledgeValue;
//     document.querySelector(
//       "#totalBacked"
//     ).innerHTML = sum
//       .toLocaleString("en-US", { minimumFractionDigits: 3 })
//       .replace(".", ",");
//     openSucces();
//   }      
// }

// function select(radio) {
//   const divModalCard = radio.closest('.modal-card');
//   const modalFooter = divModalCard.querySelector(".toggle-footer");
//   divModalCard.classList.add("selected");
//   modalFooter.classList.remove("hidden");
// }

// function unselect(radio) {
//   const divModalCard = radio.closest('.modal-card');
//   const modalFooter = divModalCard.querySelector(".toggle-footer");
//   divModalCard.classList.remove("selected");
//   modalFooter.classList.add("hidden");
// }