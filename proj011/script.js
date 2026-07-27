const slides = document.querySelectorAll('.testemonials-card');
const btnLeft = document.querySelector('.teste-left')
const btnRight = document.querySelector('.teste-right')
let index = 0;

function changeSlide() {
    const slideActive = document.querySelector('.testemonials-card.active')

    slideActive.classList.remove('active')

    slides[index].classList.add('active')
}

btnRight.addEventListener('click', () => {
    index++;

    if (index < slides.length) {

    const slideActive = document.querySelector('.testemonials-card.active')

    slideActive.classList.remove('active')

    slides[index].classList.add('active')

    } else {
        index = 0;

    const slideActive = document.querySelector('.testemonials-card.active')

    slideActive.classList.remove('active')

    slides[index].classList.add('active')
    }

})

btnLeft.addEventListener('click', () => {
    index--

    if (index >= slides.length - 4) {
    const slideActive = document.querySelector('.testemonials-card.active')

    slideActive.classList.remove('active')

    slides[index].classList.add('active')
    } else {
        index = slides.length - 1;

    const slideActive = document.querySelector('.testemonials-card.active')

    slideActive.classList.remove('active')

    slides[index].classList.add('active')
        
    }

})

console.log(slides)