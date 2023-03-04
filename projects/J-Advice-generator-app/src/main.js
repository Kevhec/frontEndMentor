const BASE_URL = 'https://api.adviceslip.com/advice';
const button = document.getElementById('new-advice');
const AdvText = document.getElementById('advice-text');
const AdvId = document.getElementById('advice-id');

async function getAdvice() {
  try {
    if(AdvText.textContent) {
      button.setAttribute('disabled', true)
    
      setTimeout(() => {
        button.removeAttribute('disabled')
        
      }, 2000);
    }

    const response = await fetch(BASE_URL);
    const {
      slip: {
        advice,
        id
      }
    } = await response.json();
    
    AdvText.textContent = `"${advice}"`;
    AdvId.textContent = `#${id}`;

  } catch(error) {
    console.error(error.message)
  }
}

button.addEventListener('click', getAdvice);
document.addEventListener('DOMContentLoaded', getAdvice);