import { countrys } from "./country.js";
import { renderProducts } from "./render.js";
import { filterbyRegion } from "./filter.js";


renderProducts(countrys)

const selectRegion = document.querySelector('#region');

selectRegion.addEventListener('change', () => {

    const region = selectRegion.value;

    const filteredCountries = filterbyRegion(
        countrys, 
        region,
    );

    renderProducts(filteredCountries)
})

