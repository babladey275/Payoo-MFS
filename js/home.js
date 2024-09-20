// step1: add a event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault();

    //step2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    
    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    
    //step3: verify the pin number
    //bad way to validate pin
    if(pinNumberInput === '1234'){
        //step4: get the current balance
        const balance = document.getElementById('account-balance').innerText;

        //step5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        
        const newBalance = addMoneyNumber + balanceNumber;
        // console.log(newBalance);

        // step6: update the balance in UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add money! please try again.');
    }
});



// Cash out

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;

    const cashOutPin = document.getElementById('input-cash-out-pin').value;

    if(cashOutPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;

        const balanceNum = parseFloat(balance);
        const cashOutNum = parseFloat(cashOutInput);

        const newBalance = balanceNum - cashOutNum;

        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to Cash Out! please try again.');
    }

});