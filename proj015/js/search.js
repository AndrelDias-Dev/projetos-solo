export function search(movies, text) {

    if (text === '') {
        return movies
    }

    return movies.filter(movie => {
        return movie.title.toLowerCase().includes(text.toLowerCase())
    })
}