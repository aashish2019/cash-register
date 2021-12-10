const billAmount = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");
const checkButton = document.getElementById("check-button");
const errorMessage = document.getElementById("error-message");
const noOfNotes = document.getElementsByClassName("no-of-notes");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click" , function validateBillAndCashAmount(){
    errorMessage.innerText = "";
    if( billAmount.value > 0 ){
        console.log(billAmount.value);
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } 
        else{
            showMessage("The cash given must atleast be equal to bill amount");
        }
    } 
    else {
        showMessage("Invalid Bill Amount");
    }
});
function calculateChange(amountToBeReturned){
    for(i=0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
        console.log(numberOfNotes);
    }
}

function showMessage(message) {
    errorMessage.innerText = message;
}