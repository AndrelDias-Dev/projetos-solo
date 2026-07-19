const produtos = [
    {
        id: 1, name: 'Camiseta Masculina', currentPrice: 29, oldPrice: undefined, discount: false, image: 't-shit.jpg', category: 'roupas', rating: 4,
        reviews: 33, badge: 'new'
    },

    {
        id: 2, name: 'Livro - Yol Gösteren', currentPrice: 29, oldPrice: 50, discount: 20, image: 'livro.jpg', category: 'livros', rating: 2,
        reviews: 200, badge: 'discount'
    },

    {
        id: 3, name: 'Infinix Hot 40i', currentPrice: 923.99, oldPrice: undefined, discount: false, image: 'smathphone.jpg', category: 'eletronicos', rating: 5,
        reviews: 242, badge: 'normal'
    },

    {
        id: 4, name: 'Skincare Luxury', currentPrice: 40, oldPrice: 100, discount: 25, image: 'skincare.jpg', category: 'roupas', rating: 2,
        reviews: 123, badge: 'discount'
    },

    {
        id: 5, name: 'Tenis "Nike" Azul', currentPrice: 432.34, oldPrice: undefined, discount: false, image: 'shoes.jpg', category: 'sports', rating: 4,
        reviews: 232, bagde: 'normal'
    },

    {
        id: 6, name: 'Mouse Logitech', currentPrice: 340.34, oldPrice: null, discount: false, image: 'mouse.jpg', category: 'eletronicos', rating: 3, reviews: 65, badge: 'new'
    },
];

const productGrid = document.querySelector('.products-grid')


function renderProducts(produtos) {

    productGrid.innerHTML = ''

    produtos.forEach(produto => {

        // badge lógica //
        let badgeText = ''

        if (produto.badge === 'discount') {
            badgeText = `${produto.discount}%`
        } else if (produto.badge === 'new') {
            badgeText = 'NEW'
        } else {
            badgeText = ''
        }
        // badge lógica //

        // preços antigo lógica //
        let oldPriceText = ''

        if (produto.oldPrice) {
            oldPriceText = produto.oldPrice
        }
        // preços antigo lógica //

        // DESCONTO // 
        let currentPrice = produto.currentPrice

        if (produto.currentPrice && produto.discount) {
            const descontoEmReais = produto.oldPrice * produto.discount / 100
            currentPrice = produto.oldPrice - descontoEmReais
        }
        // DESCONTO //





        productGrid.innerHTML += `

    <div class="product-card">

        <div class="product-top">
            <div class="product-badge ${produto.badge}">
                ${badgeText}
            </div>

            <button class="favorite-btn">
                <i class="fa-solid fa-heart"></i>
            </button>
        </div>

        <button class="cart">
                Adicionar
        </button>

        <img src="imagens/${produto.image}" alt="${produto.name}">

        <div class="product-info">
            <h3 class="product-name">${produto.name}</h3>

            <p class="product-stars">
                ${createStars(produto.rating)}
                <span>(${produto.reviews})</span>
            </p>

            <p class="product-price">
                <span class="current-price">R$ ${currentPrice.toFixed(2)}</span>

                <span class="old-price">${oldPriceText}</span>
            </p>


        </div>
    </div>
                        
    `
    })
}

renderProducts(produtos)

// <3 //
const favoriteBtns = document.querySelectorAll('.favorite-btn')

favoriteBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        btn.classList.toggle('active')
    })
})
// <3 //


// grid buttons //
const btnGrid = document.querySelector('.grid')
const btnList = document.querySelector('.list')

btnGrid.addEventListener('click', () => {
    productGrid.classList.remove('list-view')

    btnGrid.classList.add('active')
    btnList.classList.remove('active')
})

btnList.addEventListener('click', () => {
    productGrid.classList.add('list-view')
    
    btnList.classList.add('active')
    btnGrid.classList.remove('active')
})
// grid buttons //

// STARS//

function createStars(rating) {

    let stars = ''

    for(let i = 0; i < 5; i++) {

        stars += i < rating
         ? '<i class="fa-solid fa-star"></i>' 
         : '<i class="fa-regular fa-star"></i>'
    }
    return stars
}

// filtro pesquisa//

const seachInput = document.getElementById('seach-input')

seachInput.addEventListener('input', () => {

    const seachTerm = seachInput.value.toLowerCase()

    const filteredProducts = produtos.filter(produto => {

        return produto.name.toLowerCase().includes(seachTerm)
    })

    renderProducts(filteredProducts)

})

// filtro pesquisa//

// filtro categoria //

const categoryFilters = document.querySelectorAll('.category-filter')

function getSelectedCategories() {
    return [...categoryFilters].filter(input => input.checked).map(input => input.value)
}

const selectedCategories = getSelectedCategories()

const filteredProducts = produtos.filter(produto => {
    return selectedCategories.includes(produto.category)
})

categoryFilters.forEach(filter => {
    filter.addEventListener('change', () => {

        const selectedCategories = getSelectedCategories()

        const filteredProducts = produtos.filter(produto => {

            if(selectedCategories.length === 0) {
                return true
            }

            return selectedCategories.includes(produto.category)

        })

        renderProducts(filteredProducts)

    })
   
})
// filtro categoria //

// BTN CATEGORY //
const btnCategory = document.querySelector('.category')
const itemCategory = document.querySelector('.category-items')

btnCategory.addEventListener('click', () => {
    itemCategory.classList.toggle('active')
})
// BTN CATEGORY //

