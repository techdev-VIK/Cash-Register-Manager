const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

// console.log(billAmount.value);
// console.log(cashGiven.value);


// checkButton.addEventListener("click", ()=> console.log("clicked"));

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    if(billAmount.value > 0){

    }else{
        message.innerText = "Bhosda mra, Pehankelode";

    }
});

