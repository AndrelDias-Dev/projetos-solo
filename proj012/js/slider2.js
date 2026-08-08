import { movies } from "./movies.js";

export function initSlider2() {
    const wrapper = document.querySelector('.swiper-wrapper');

wrapper.innerHTML = movies.map(filme => {
  return `
    <div class="swiper-slide">
      <article class="movie-card">
        <img src="${filme.image}" alt="${filme.title}">
        <div class="rating">
          <i class="fa-solid fa-star"></i>
          ${filme.stars}
        </div>
        <div class="bottom-card">
        <div class="icons">
          <i class="fa-solid fa-circle-info"></i>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div class="description">
          <h2>${filme.title}</h2>
          <span class="year">
            <p>${filme.year}</p>
          </span>
        </div>
        </div>
      </article>
    </div>
  `;
}).join('');

const swiper = new Swiper('.filmesSwiper', {
  slidesPerView: 2,
  centeredSlides: 3,
  spaceBetween: 20,
  speed: 300,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 3},
    1200: { slidesPerView: 5}
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

swiper.el.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});

swiper.el.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});


swiper.el.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});
}








