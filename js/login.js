document.getElementById('btn-login').addEventListener('click', function(event){
    //prevent default behavior (prevent reloading browser)
    event.preventDefault();

    //get the phone number & pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // console.log(phoneNumber, pinNumber);

    //validate phone & pin
    //this is temporary. should not do this like.
    if(phoneNumber === '5' && pinNumber === "1234") {
        //console.log("you are logged in");
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number or pin');
    }
})