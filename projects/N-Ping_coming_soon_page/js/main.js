const form = document.getElementById('suscription-form');
const input = document.querySelector('.suscription-input-email');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  clearAlert();

  // Check for empty
  if(input.value === ''){
    generateAlert('Please provide an email address');
    return
  }

  // Check email
  if(!emailValidation(input.value)) {
    generateAlert('Please provide a valid email address')
    return
  }
})

function generateAlert(message) {
  const errorAlert = document.createElement('P');
  errorAlert.textContent = message;
  errorAlert.classList.add('alert', 'mb-20');

  input.classList.remove('mb-10')
  input.classList.add('mb-5', 'error')
  form.appendChild(errorAlert);
}

function clearAlert() {
  const errorAlert = document.querySelector('.alert')
  if(errorAlert) {
    errorAlert.remove();
    input.classList.remove('mb-5', 'error');
    input.classList.add('mb-10')
  }
}

function emailValidation(email) {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regEx.test(email);
}