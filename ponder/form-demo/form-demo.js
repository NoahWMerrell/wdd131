let selectPayment = document.querySelector('#paymentMethod');
let creditcard = document.querySelector('#creditCardNumberContainer');
let paypal = document.querySelector('#paypalUsernameContainer');

selectPayment.addEventListener('change', changePayment);

function changePayment() {
    let current = selectPayment.value;
    creditcard.classList.add('hide');
    paypal.classList.add('hide');
    if (current == 'creditCard') {
        creditcard.classList.remove('hide');
    } else if (current == 'paypal') {
        paypal.classList.remove('hide');
    }
}