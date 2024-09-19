document.getElementById('btn-login').addEventListener('click', function(event){
    //prevent default behavior (prevent reloading browser)
    event.preventDefault();

    //get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
})