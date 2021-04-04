const radios = document.getElementsByName('radio'); //return a NodeList
window.onload = radioChange;
function radioChange() {
    for(i = 0; i< radios.length; i++){
        // return the closest parent div with class .modal-card
        let parentDiv = radios[i].closest('.modal-card');
        if(radios[i].checked) {
            // add class .selected to parent div
            parentDiv.classList.add('selected');
        } else {
            parentDiv.classList.remove('selected');
        }
    }
}
