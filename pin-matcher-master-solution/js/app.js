function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {

        return getPin();
    }

}


function genaratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function() {
    const pin = getPin();

    //display pin
    const displayPin = document.getElementById('show-pin');
    displayPin.value = pin;



})

document.getElementById('calculator').addEventListener('click', function(event) {

    const number = (event.target.innerText);
    const typeNumberField = document.getElementById('typed-numbers');
    const previousNumber = typeNumberField.value;


    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        } else if (number === '<') {
            const digit = previousNumber.split('');
            digit.pop();

            const remainigDigits = digit.join('');
            typeNumberField.value = remainigDigits;


        }
    } else {


        const newTypeNumber = previousNumber + number;

        typeNumberField.value = newTypeNumber;
    }



})

document.getElementById('submit-pin').addEventListener('click', function() {
    const displayfield = document.getElementById('show-pin');
    const currentPin = displayfield.value;
    const typeNumberField = document.getElementById('typed-numbers');
    const typeNumber = typeNumberField.value;
    const pinSuccess = document.getElementById('pin-success');
    const pinfail = document.getElementById('pin-failure');
    if (typeNumber == currentPin) {

        pinSuccess.style.display = 'block';
        pinfail.style.display = 'none';
    } else {

        pinfail.style.display = 'block';
        pinSuccess.style.display = 'none';
    }

})