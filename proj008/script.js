const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const slides = document.querySelectorAll('.slide-item')
const bullets = document.querySelectorAll('.bullets li')
let index = 0

function changeSlide() {
    const slideActive = document.querySelector('.slide-item.active')
    const bulletActive = document.querySelector('.bullets li.active')

    slideActive.classList.remove('active')
    bulletActive.classList.remove('active')

    slides[index].classList.add('active')
    bullets[index].classList.add('active')

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

bullets.forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        index = bulletIndex;
        changeSlide();
    })
})


