const track = document.querySelector('.testemonials-track');
const slides = document.querySelectorAll('.testemonials-card');
const container = document.querySelector('.testemonials-container')

const btnLeft = document.querySelector('.teste-left');
const btnRight = document.querySelector('.teste-right');

let index = 0;

let autoPlay;

function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`
}

function nextSlide() {
    index++

    if (index >= slides.length) {
        index = 0
    }

    updateSlide()
}

function prevSlide() {
    index--

    if (index < 0) {
        index = slides.length - 1;
    }

    updateSlide()
}

function startAutoplay() {
    autoPlay = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoPlay)
}


btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

container.addEventListener('mouseenter', stopAutoplay)
container.addEventListener('mouseleave', startAutoplay)



