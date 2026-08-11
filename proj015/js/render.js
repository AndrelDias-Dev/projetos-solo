export function renderProducts(movies) {
    const movieContainer = document.querySelector('.movie-container')

    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        movieContainer.innerHTML += `
        <div class="movie-card">

        <div class="movie-left">
            <img src="${movie.img}" alt="${movie.title}">
        </div>


        <div class="movie-right">
            <div class="movie-title">
                <h2>${movie.title}</h2>
            </div>
            <ul class="movie-gender">
                <li class="movie-year">${movie.year}</li>
                <li class="movie-hours">${movie.hours}</li>
                <li class="movie-genre">${movie.genre}</li>
            </ul>
            <div class="movie-rating">
                <div class="movie-tomate">
                    <img src="assets/imagens/tomatte.png" alt="">
                    <div class="rotten">${movie.rotten}</div>
                </div>
                <i class="fa-solid fa-star"></i>
                <p class="stars">8${movie.stars}</p>
            </div>
            <div class="movie-info">
                ${movie.info}
            </div>

            <div class="movie-bottom">
                <button class="watch-btn">
                    <i class="fa-solid fa-play"></i>
                    Assista ao filme
                </button>

                <button class="like-btn">
                    <i class="fa-solid fa-thumbs-up"></i>
                    Like
                </button>

                <button class="deslike-btn">
                    <i class="fa-solid fa-thumbs-down"></i>
                    Deslike
                </button>
            </div>
        </div>

    </div>
        `
    })
}
