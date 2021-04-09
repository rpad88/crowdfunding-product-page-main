function verifyStock() {
    const stocks = document.querySelectorAll('.stock');
    for(var stock of stocks) {
        // console.log(stock.textContent);
        if(stock.textContent == 0) {
        let mainParentDiv = stock.closest(".back-option") || stock.closest(".modal-card");
            mainParentDiv.classList.add("no-stock");
        let btn = mainParentDiv.querySelector(".btn");
        btn.textContent = "Out of Stock";
        btn.classList.add("btn-sold-out");
        btn.disabled = true;
        }
        console.log("end of verifyStok()");
    }
}
export { verifyStock };