const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000,500,100,20,10,5,1];
const noOfNotes=document.querySelector(".no-of-notes")
console.log(cashGiven.value);
checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hiddenMessage();
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturn = cashGiven.value-billAmount.value;
            console.log(amountToBeReturn);
            calculateChange(amountToBeReturn);
        }
        else{
            showMessage("the cash given atleast be equal to bill amount");
        }
    }
       
    else{
       showMessage("Invalid bill Amount");
    }
});
function calculateChange(amountToBeReturn){
    for (let i=0;i<availableNotes.length;i++){
        const numberOfNotes=Math.trunc(amountToBeReturn / availableNotes[i]);
        amountToBeReturn=amountToBeReturn%availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }

}
function hiddenMessage(){
    message.style.display="none";
}
function showMessage(msg){
    message.style.display="block";
    message.innerText= msg;
}