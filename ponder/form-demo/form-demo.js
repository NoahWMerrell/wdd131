let selectPayment = document.querySelector('#paymentMethod');
let creditcard = document.querySelector('#creditCardNumberContainer');
let paypal = document.querySelector('#paypalUsernameContainer');

selectPayment.addEventListener('change', changePayment);

function changePayment() {
    let current = selectPayment.value;
    if (current == 'creditCard') {
        creditcard.classList.remove('hide');
        paypal.classList.add('hide');
    } else if (current == 'paypal') {
        paypal.classList.remove('hide');
        creditcard.classList.add('hide');
    } else {
        creditcard.classList.add('hide');
        paypal.classList.add('hide');
    }
}