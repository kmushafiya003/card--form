let displayCardNumber = document.querySelector('.display-card-number');
let displayCardHolderName = document.querySelector('.display-cardholder-name');
let displayMonth = document.querySelector('.display-month');
let displayYear = document.querySelector('.display-year');

const cardholderName = document.querySelector('#cardholder-name');
const cardNumber = document.querySelector('#card-number');
const expMonth = document.querySelector('#exp-date-month');
const expYear = document.querySelector('#exp-date-year');
const cvc = document.querySelector('#cvc');
const form = document.querySelector('form');

let nameError = document.querySelector('.name-error');
let numberError = document.querySelector('.number-error');
let expError = document.querySelector('.exp-error');
let cvcError = document.querySelector('.cvc-error');

let defaultCardNumber = '0000 0000 0000 0000';
let defaultCardHolderName = cardholderName.placeholder.slice(5);
let defaultMonth = '00';
let defaultYear = '00';

displayCardNumber.innerText = defaultCardNumber;
displayCardHolderName.innerText = defaultCardHolderName;
displayMonth.innerText = defaultMonth;
displayYear.innerText = defaultYear;

//for cardholder name
cardholderName.addEventListener('input', () => {
  displayCardHolderName.innerText = cardholderName.value;
});

//for card-number

cardNumber.addEventListener('input', () => {
  displayCardNumber.innerText = cardNumber.value;
});

//for expiry month

expMonth.addEventListener('input', () => {
  displayMonth.innerText = expMonth.value;
});

//for expiry year

expYear.addEventListener('input', () => {
  displayYear.innerText = expYear.value;
});

console.log(form);

function submitHandler(event) {
  event.preventDefault();

  // Reset all error messages
  nameError.innerText = '';
  numberError.innerText = '';
  expError.innerText = '';
  cvcError.innerText = '';

  cardholderName.classList.remove('error-input');
  cardNumber.classList.remove('error-input');
  expMonth.classList.remove('error-input');
  expYear.classList.remove('error-input');
  cvc.classList.remove('error-input');

  //valiadtion

  if (cardholderName.value === '') {
    nameError.innerText = "Can't be blank";
    cardholderName.classList.add('error-input');
  }

  if (cardNumber.value === '') {
    numberError.innerText = "Can't be blank";
    cardNumber.classList.add('error-input');
  } else if(cardNumber.value.length !== 16){
    numberError.innerText = 'Please enter 16 digits';
    cardNumber.classList.add('error-input');
  }
  else if (isNaN(cardNumber.value)) {
    numberError.innerText = 'Wrong Format , numbers only';
    cardNumber.classList.add('error-input');
  }

  if (expMonth.value === '') {
    expError.innerText = "Can't be blank";
    expMonth.classList.add('error-input');
  } else if (isNaN(expMonth.value)) {
    expError.innerText = 'Month must be in numbers';
    expMonth.classList.add('error-input');
  } else if (expMonth.value < 0 || expMonth.value > 12) {
    expError.innerText = 'Enter Valid Month';
    expMonth.classList.add('error-input');
  }

  if (expYear.value === '') {
    expError.innerText = "Can't be blank";
    expYear.classList.add('error-input');
  } else if (isNaN(expYear.value)) {
    expError.innerText = 'Year must be in numbers';
    expYear.classList.add('error-input');
  }

  if (cvc.value === '') {
    cvcError.innerText = "Can't be Blank";
    cvc.classList.add('error-input');
  } else if (isNaN(cvc.value)) {
    cvcError.innerText = 'Wrong format, numbers only';
    cvc.classList.add('error-input');
  }

  //Check if all fields are valid
  if (
    cardholderName.value !== '' &&
    cardNumber.value !== '' &&
    !isNaN(cardNumber.value) &&
    cardNumber.value.length === 16 &&
    expMonth.value !== '' &&
    !isNaN(expMonth.value) &&
    expMonth.value > 0 &&
    expMonth.value <= 12 &&
    expYear.value !== '' &&
    !isNaN(expYear.value) &&
    cvc.value !== '' &&
    !isNaN(cvc.value)
  ) {
    window.location.href = form.action;
  }
}

function resetAll() {
  cardholderName = '';
  cardNumber = '';
  expMonth = '';
  expYear = '';
  cvc = '';
}

form.addEventListener('submit', submitHandler);
