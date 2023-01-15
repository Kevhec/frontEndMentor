const navButton = document.querySelector('.nav-button');
const navHamb = document.querySelector('.nav-hamb');
const mainNav = document.querySelector('.main-nav');
const navOverlay = document.querySelector('.background-overlay');

navButton.addEventListener('click', toggleEvents);
navOverlay.addEventListener('click', toggleEvents);

function toggleEvents() {
  navButton.classList.toggle('nav-button-position-fixed')
  navHamb.classList.toggle('active');
  mainNav.classList.toggle('active');
  navOverlay.classList.toggle('active');
}