const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorAlert = document.querySelector('.error-text');
const errorIcon = document.querySelector('.error-svg');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // RegExp for email syntax check
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validation = emailRegExp.test(emailInput.value);
  clearAlert()
  
  // Empty and email validations
  if(emailInput.value === '') {
    generateAlert('Input can\'t be an empty value');
    return
  }
  if(!validation) {
    generateAlert('Please provide a valid email');
  }
})

function generateAlert(message) {
  emailInput.classList.add('outline-red', 'focus', 'padding-right-33perc');
  emailInput.classList.remove('padding-right-25perc')
  errorAlert.classList.remove('visually-hidden');
  errorIcon.classList.remove('visually-hidden');
  errorAlert.textContent = message;
}

function clearAlert() {
  emailInput.classList.remove('outline-red', 'focus', 'padding-right-33perc');
  emailInput.classList.add('padding-right-25perc')
  errorAlert.classList.add('visually-hidden');
  errorIcon.classList.add('visually-hidden')
}