const navBtn = document.querySelector('.hamb-button');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const overlay = document.querySelector('.overlay');

navBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu)
navLinks.forEach(link => {
  link.addEventListener('click', accentLinks)
})

function toggleMenu() {
  navBtn.classList.toggle('active');
  navBtn.classList.toggle('not-active');
  nav.classList.toggle('active')
  overlay.classList.toggle('active');

  if (nav.classList.contains("active")) {
    nav.style.height = (nav.scrollHeight + 80) + "px";
  } else {
    nav.style.height = 0;
  }
}

function accentLinks(evt) {
  navLinks.forEach(link2 => {
    link2.classList.remove('nav__link--accent')
  })
  evt.target.classList.add('nav__link--accent')
}