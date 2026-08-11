
export function filterbyRegion(countries, region, todos) {

    if (region === 'Todos') {
        return countries;
    }

    return countries.filter(country => {
        return country.region === region;
    })
}