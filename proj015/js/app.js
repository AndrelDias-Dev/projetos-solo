import { renderProducts } from "./render.js";
import { movies } from "./movies.js";
import { checkFilter } from "./filter.js";
import { search } from "./search.js";

const inputText = document.querySelector('#search-input')
const genreInputs = document.querySelectorAll('input[name="genre"]')

let genre = '';
let text = '';

function updateMovies() {
    let result = checkFilter(movies, genre)

    result = search(result, text)

    renderProducts(result)
}

updateMovies()

inputText.addEventListener('input', () => {
    text = inputText.value

    updateMovies()
})

genreInputs.forEach(input => {
    input.addEventListener('change', () => {
        genre = input.value

        updateMovies()
    })
})





