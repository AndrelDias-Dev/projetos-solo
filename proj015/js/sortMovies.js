export function sortMovies(movies, sort) {

    const sortedMovies = [...movies]
    
    if (sort === 'rating-desc') {
        sortedMovies.sort((a, b) => {
            return b.stars - a.stars
        })
    }

    if (sort === 'rating-asc') {
        sortedMovies.sort((a, b) => {
            return a.stars - b.stars
        })
    }

    if (sort === 'year-desc') {
        sortedMovies.sort((a, b) => {
            return b.year - a.year
        })
    }

    if (sort === 'year-asc') {
        sortedMovies.sort((a, b) => {
            return a.year - b.year
        })
    }

    return sortedMovies
}