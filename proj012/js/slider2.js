const wrapper = document.querySelector('.swiper-wrapper')

fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    .then(response => response.json())
    .then(dados => {

        const filmes = dados.map(filme => {

            return {
                rating: filme.Runtime,
                titulo: filme.Title,
                ano: filme.Year,
                poster: filme.Poster
            }
        })

        wrapper.innerHTML = filmes.map(filme => {

    return `
            <div class="swiper-slide">
                <article class="movie-card">
                    <img src="${filme.poster}" alt="${filme.titulo}">
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        ${filme.rating}
                    </div>
                    <div class="icons">
                        <i class="fa-solid fa-circle-info"></i>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div class="description">
                        <h2>${filme.titulo}</h2>
                        <span class="year">
                            <p>${filme.ano}</p>
                        </span>
                    </div>
                </article>
            </div>
        `
}).join('')
    })


const swiper = new Swiper('.filmesSwiper', {

    slidesPerView:3,

    spaceBetween:20,

    speed:300,

    centeredSlides:true,

    loop:true,

    grabCursor: true,

    autoplay:{
        delay: 1500,
        pauseOnMouseEnter:true
    },

    breakpoints:{

        768:{
            slidesPerView:3
        },

        1200:{
            slidesPerView:5
        }

    }

});