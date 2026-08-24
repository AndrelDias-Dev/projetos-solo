const swiper = new Swiper(".burguer-swiper", {
  
  loop: true,

  slidesPerView: 3,

  centeredSlides: true,

  spaceBetween: 24,

  speed: 900,

  autoplay: {
    delay: 2000,
  },

});

const slideinfinite = new Swiper(".infinite-swiper", {
  

  slidesPerView: 'auto',

  centeredSlides: true,

  spaceBetween: 24,

  speed: 2000,
  
  loop: true,

  freeMode: true,

  freeModeMomentum: false,

  autoplay: {
    delay: 0,

    disableOnInteraction: false,
  },

});
