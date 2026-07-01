const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const slides = document.querySelectorAll('.slide-item')
let index = 0

function changeSlide() {
    const slideActive = document.querySelector('.slide-item.active')

    slideActive.classList.remove('active')

    slides[index].classList.add('active')
}


btnRight.addEventListener('click', () => {

    index++

    if (index < slides.length) {
    changeSlide()
    } else {
    index = 0
    changeSlide()
    }
    
})

btnLeft.addEventListener('click', () => {
    index--

    if (index < 0) {
        index = slides.length - 1
        changeSlide()
    } else {
        changeSlide()
    }
})


