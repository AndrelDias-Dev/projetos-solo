const track = document.querySelector('.slider-track');
const arrowRight = document.querySelector('.next');
const arrowLeft = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide-item');
const bullets = document.querySelector('.slider-bullets');

let index = 1;

// ==========================
// Cria os bullets
// ==========================

slides.forEach((_, i) => {
    const bullet = document.createElement('div');

    bullet.classList.add('bullet');

    bullet.addEventListener('click', () => {
        index = i;
        updateSlide();
    });

    bullets.appendChild(bullet);
});

// Agora que os bullets existem, podemos selecioná-los
const dots = document.querySelectorAll('.bullet');

// ==========================
// Atualiza Slider + Bullets
// ==========================

function updateSlide() {
    console.log("Index:", index);

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        console.log(i, i === index);

        dot.classList.toggle("active", i === index);
    });
}

// ==========================
// Próximo
// ==========================

function nextSlide() {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    updateSlide();
}

// ==========================
// Anterior
// ==========================

function prevSlide() {

    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    updateSlide();
}


// ==========================
// Eventos
// ==========================

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

setInterval(nextSlide, 3000)

