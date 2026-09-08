
// API

const fotografias = [
    {
        id: 1,
        img: 'imagens/project-img1.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },

    {
        id: 2,
        img: 'imagens/project-img2.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },

     {
        id: 3,
        img: 'imagens/project-img3.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },

     {
        id: 4,
        img: 'imagens/project-img4.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },

     {
        id: 5,
        img: 'imagens/project-img5.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },

     {
        id: 6,
        img: 'imagens/project-img6.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },

     {
        id: 7,
        img: 'imagens/project-img7.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },

     {
        id: 8,
        img: 'imagens/project-img8.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },

    {
        id: 9,
        img: 'imagens/project-img9.jpg',
        favorite: false,
        nome: 'Retratos Urbanos',
        category: 'Retrato' + '-' + '2023',
    },
]

// PROJECT RENDER 

const container = document.querySelector('.project-box')
const escondidas = fotografias.splice(6, 3)

const btnMore = document.querySelector('.more')

function renderProducts() {

    fotografias.forEach(foto => {

        container.innerHTML += `
            <article class="project-card">
                <img src="${foto.img}" alt="${foto.nome}">

                <div class="card-heart">
                    <i class="fa-regular fa-heart"></i>
                </div>

                <div class="card-bottom">
                    <div class="card-name">
                        ${foto.nome}
                    </div>

                    <div class="card-category">
                        ${foto.category}
                    </div>
                </div>
            </article>
        `
    })
}

btnMore.addEventListener('click', () => {

    fotografias.push(...escondidas)

    escondidas.forEach(foto => {

        container.innerHTML += `
            <article class="project-card">
                <img src="${foto.img}" alt="${foto.nome}">

                <div class="card-heart">
                    <i class="fa-regular fa-heart"></i>
                </div>

                <div class="card-bottom">
                    <div class="card-name">
                        ${foto.nome}
                    </div>

                    <div class="card-category">
                        ${foto.category}
                    </div>
                </div>
            </article>
        `
    })

    btnMore.style.display = 'none'
})

renderProducts()


//  HEADER SCROLLING BACKGROUND
window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    if (window.scrollY > 90) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})
//  HEADER SCROLLING BACKGROUND

// TOGGLE BTN

const btnToggle = document.querySelector('.menu-toggle')

btnToggle.addEventListener('click', () => {
    if (document.body.classList.toggle('dark-theme')) {
        btnToggle.querySelector('i').classList.remove('fa-sun')
        btnToggle.querySelector('i').classList.add('fa-moon')
    } else {
        btnToggle.querySelector('i').classList.remove('fa-moon')
        btnToggle.querySelector('i').classList.add('fa-sun')
    }
})

// MENU 

const btnMenu = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menulink = document.querySelectorAll('a')

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')

    menulink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
        })
    })
})

// 