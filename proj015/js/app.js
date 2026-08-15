import { renderProducts } from "./render.js";
import { movies } from "./movies.js";
import { search } from "./search.js";
import { checkFilter } from "./filter.js";
import { filterYear } from "./filterYear.js";
import { filterRating } from "./filterRating.js";

const inputText = document.querySelector('#search-input')
const genreInputs = document.querySelectorAll('input[name="genre"]')
const yearSelect = document.querySelector('#year')
const ratingSelect = document.querySelector('#rating')

let genre = '';
let text = '';
let year = '';
let rating = '';

function updateMovies() {

    let result = checkFilter(movies, genre)

    result = search(result, text)

    result = filterYear(result, year)

    result = filterRating(result, rating)

    renderProducts(result)
}

updateMovies()


// SEARCH

inputText.addEventListener('input', () => {

    text = inputText.value

    updateMovies()

})


// GENRE

genreInputs.forEach(input => {

    input.addEventListener('change', () => {

        genre = input.value

        updateMovies()

    })

})


// YEAR

yearSelect.addEventListener('change', () => {

    year = yearSelect.value

    updateMovies()

})

ratingSelect.addEventListener('change', () => {

    rating = ratingSelect.value

    updateMovies()
})






