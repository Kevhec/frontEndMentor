const card = document.querySelector('.card');
const form = document.querySelector('.card__form');

function enableEventListeners () {
  form.addEventListener('submit', ratingSubmit)
}
enableEventListeners()

function ratingSubmit (evt) {
  evt.preventDefault();

  /* Obtain rating value */
  const ratingValue = document.querySelector('input[name=score]:checked').value;
  /* Thank You state HTML modifier */

  // Image
  card.children[0].children[0].src = './images/illustration-thank-you.svg';
  card.children[0].children[0].classList.add('center-element');
  card.children[0].classList.remove('round-container','card__star-icon');
   
  // Main title
  card.children[1].children[0].textContent = "Thank you!";
  card.children[1].children[0].classList.add('center-text');

  // Text
  card.children[1].children[1].textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  card.children[1].children[1].classList.add('center-text');

  // Hiding form
  card.children[2].classList.add('hidden')

  // Rating display
  const ratingDisplayContainer = document.createElement('div');
  const ratingDisplayText = document.createElement('p');
  ratingDisplayContainer.classList.add('card__rating-display','round-container','center-element');
  ratingDisplayText.classList.add('orange-text')
  ratingDisplayText.textContent = `You selected ${ratingValue} out of 5`
  
  ratingDisplayContainer.appendChild(ratingDisplayText);
  card.insertBefore(ratingDisplayContainer, card.children[1]);

}

