import { radioChange } from "./pledges.js";
import { openNavList, closeNavList, menuClicked } from "./navbar.js";
import { openBack, closeBack, openSucces, closeSuccess,   } from "./script.js";
import { verifyStock } from "./stock.js";


// imports from pledges.js
// Load to execute function from html. (important to avoid "Uncaught ReferenceError")
window.radioChange = radioChange;

// imports from navbar.js
openNavList;
closeNavList;
menuClicked();

// imports from script.js
openBack();
closeBack();
openSucces();
window.closeSuccess = closeSuccess;
closeSuccess();

// Imports from stock.js


// onload functions
window.onload = function () {
    radioChange();
    verifyStock();
}
