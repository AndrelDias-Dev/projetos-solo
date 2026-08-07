export function initSlider() {
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
    ("Index:", index);

    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
        (i, i === index);

        dot.classList.toggle("active", i === index);
    });
}


function nextSlide() {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    updateSlide(nextSlide, 0);
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

arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);

const slider = document.querySelector('.slide-item')
let autoSlide;

function startSlide() {
    autoSlide = setInterval(nextSlide, 3000)
}

function stopSlide() {
    clearInterval(autoSlide)
}

slider.addEventListener('mouseenter', stopSlide)

slider.addEventListener('mouseleave',  startSlide)

startSlide()

}

// ==========================
// Próximo
// ==========================


// ==========================
// Eventos
// ==========================


export function renderSlide(movies) {
    const track = document.querySelector('.slider-track');

    track.innerHTML = movies.map(movie => {
        
        return `
        <article class="slide-item">
        <img src="${movie.image}" alt="${movie.title}">

        <div class="slide-content">
            <div class="slide-badge">
                <span>Em Destaque</span>
            </div>

            <div class="slide-tittle">
                <h1>${movie.title}</h1>
            </div>

            <div class="slide-meta">
                <span class="movie-rating">
                    <i class="fa-solid fa-star"></i>
                    ${movie.stars}
                </span>
                <span class="movie-year">${movie.year}</span>
                <span class="movie-hour">${movie.hours}</span>
                <span class="movie-category">${movie.category}</span>
            </div>

            <div class="slide-description">
                <p>${movie.description}</p>
            </div>

            <div class="hero-buttons">
                <button class="prev-button">
                    <i class="fa-solid fa-play"></i>
                    <h2>ASSISTIR TRAILER</h2>
                </button>

                <button class="next-button">
                    <i class="fa-solid fa-plus"></i>
                    <h2>ADICIONAR AOS FAVORITOS</h2>
                </button>
            </div>
        </article>
    `;

    }).join('')
}



