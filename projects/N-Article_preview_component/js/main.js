const shareButton = document.querySelector('.share__button');
const shareContainer = document.querySelector('.share__container');

shareButton.addEventListener('click', () => {
  shareContainer.classList.toggle('active');
  shareButton.classList.toggle('active');

  if(shareButton.classList.contains('active')) {
    shareButton.children[0].children[0].setAttribute('fill', '#ffffff');
  } else {
    shareButton.children[0].children[0].setAttribute('fill', '#6E8098');
  }
})