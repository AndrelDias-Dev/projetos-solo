export function checkFilter(movies, genre) {

    if (genre === '') {
        return movies
    }

    return movies.filter(movie => movie.genre.includes(genre))
}






