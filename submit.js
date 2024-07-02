let displayCardNumber = document.querySelector('.display-card-number');
let displayCardHolderName = document.querySelector('.display-cardholder-name');
let displayMonth = document.querySelector('.display-month');
let displayYear = document.querySelector('.display-year');
let continueBtn = document.querySelector('.continue-btn')



const cardDetails = JSON.parse(sessionStorage.getItem("formData"));

displayCardHolderName.innerText  = cardDetails.cardholderName;
displayCardNumber.innerText = cardDetails.cardNumber;
displayMonth.innerText = cardDetails.expMonth;
displayYear.innerText = cardDetails.expYear;


continueBtn.addEventListener('click' , ()=> {
     sessionStorage.clear();
     window.location.href = "index.html"
} )



