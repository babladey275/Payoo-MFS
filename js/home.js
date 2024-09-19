// step1: add a event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault();

    //step2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    
    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput)
})