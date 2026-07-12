const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu')


btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active')

    document.body.classList.toggle('menu-aberto');
})