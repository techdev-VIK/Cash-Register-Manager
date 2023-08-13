const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

// console.log(billAmount.value);
// console.log(cashGiven.value);


// checkButton.addEventListener("click", ()=> console.log("clicked"));

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    message.style.display ="none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            // calculateChange(amountToBeReturned);

        }else{
            showMessage("Please provide Cash equal to or more than Billed Amount")
        }

    }else{
        showMessage("Please Enter a Valid Amount");
    }
});

function showMessage(msg){
    message.style.display ="block";
    message.innerText = msg;
}