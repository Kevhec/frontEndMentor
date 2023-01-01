const faqQuestions = document.querySelector('.faq__questions-container')
const womanIllustration = document.querySelector('.main__illustration-woman')
const box = document.querySelector('.main-illustration__desktop-box')

faqQuestions.addEventListener('click', openQuestion);

womanIllustration.addEventListener('mouseenter', () => {
  box.classList.add('translateX')
})
womanIllustration.addEventListener('mouseleave', () => {
  box.classList.remove('translateX')
})


function openQuestion(evt) {
  if(evt.target.classList.contains('faq__question') || evt.target.classList.contains('question-title')){
    const questionTitle = evt.target.children[0].children[0];
    const questionArrow = evt.target.children[0].children[1];
    const questionText = evt.target.children[1];

    questionTitle.classList.toggle('bold-text');
    questionArrow.classList.toggle('active');
    questionText.classList.toggle('hidden');
  }
}
