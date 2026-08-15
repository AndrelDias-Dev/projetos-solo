export function filterRating(movies, rating) {

    if (rating === '') {
        return movies
    }

    return movies.filter(movie => movie.stars >= Number(rating))
}