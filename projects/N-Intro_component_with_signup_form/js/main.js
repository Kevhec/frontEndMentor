const form = document.querySelector('.registration-form');
const inputs = document.querySelectorAll('.registration-form input')
const registrationObject = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  clearAlerts()
  inputs.forEach(input => {
    // Check for empty
    if(input.value.trim() === '') {
      generateAlert(input, `${input.placeholder} cannot be empty`)
      registrationObject[input.id] = '';
      return
    }

    // Check for emails
    if(input.name === 'email') {
      if(!emailValidation(input.value.trim())) {
        generateAlert(input, 'Looks like this is not an email');
        return
      }
    }
    registrationObject[input.id] = input.value;
  })
})

function emailValidation(email) {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regEx.test(email);
}

function generateAlert(element, message) {
  const parent = element.parentElement;
  const alert = document.createElement('P');
  alert.textContent = message
  alert.classList.add('alert', 'alert-text', 'mb-15')
  parent.classList.add('error-icon')
  element.classList.remove('mb-15');
  element.classList.add('border-red')

  // Insert alert
  parent.appendChild(alert);
}

function clearAlerts() {
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => {
    alert.remove()
  })

  inputs.forEach(input => {
    // Clear icon, reset borders, reset margin
    if(input.parentElement.classList.contains('error-icon')) {
      input.parentElement.classList.remove('error-icon')
      input.classList.add('mb-15');
      input.classList.remove('border-red');
    }
  })
}