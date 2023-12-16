const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
message.style.display ="none";
// console.log(billAmount.value);
// console.log(cashGiven.value);


// checkButton.addEventListener("click", ()=> console.log("clicked"));

checkButton.addEventListener("click", function validateBillAndCashAmount(){
   
    if(parseInt(billAmount.value) > 0){
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)){
            const amountToBeReturned = parseInt(cashGiven.value) - parseInt(billAmount.value);
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Are You Serious? Cash should be equal or more than Billed Amount");
            setTimeout(function () {
                message.style.display = "none";
            }, 3000); // 3000 milliseconds = 3 seconds
            billAmount.value = '';
            cashGiven.value = '';
            
        }

    }else{
        showMessage("Please Enter a Valid Amount");
        setTimeout(function () {
            message.style.display = "none";
        }, 3000); // 3000 milliseconds = 3 seconds
        billAmount.value = '';
        cashGiven.value = '';
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

    }

}

function showMessage(msg){
    
    message.style.display ="block";
    message.innerText = msg;

    
}
    
