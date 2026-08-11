

export function renderProducts(countrys) {
    const gridContainer = document.querySelector('#country-container .interface')
    
    gridContainer.innerHTML = '';

    countrys.forEach(country => {
        gridContainer.innerHTML += `
        <div class="country-item">
                <div class="country-img">
                    <img src="${country.img}" alt="${country.title}">
                </div>
                <div class="country-name">
                    <h2>${country.title}</h2>
                </div>
                <div class="country-population">
                     <p><span>População: </span>${country.population}</p>
                </div>
                <div class="country-region">
                     <p><span>Região: </span>${country.region}</p>
                </div>
                <div class="country-capital">
                     <p><span>Capital: </span>${country.capital}</p>
                </div>
            </div>
        `
    })
}