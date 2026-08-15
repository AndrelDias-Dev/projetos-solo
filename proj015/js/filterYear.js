export function filterYear(movies, year) {

    if (year === '') {
        return movies
    }

    return movies.filter(movie => {
        return movie.year >= Number(year)
    })
}