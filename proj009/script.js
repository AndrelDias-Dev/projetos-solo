const btnMenu = document.querySelector('.btn-menu');
const btnLogin = document.querySelector('.btn-login')
const btnClose = document.querySelector('.btn-close')
const modal = document.getElementById('modal')
const menu = document.querySelector('.menu')

btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active')

    document.body.classList.toggle('menu-aberto');
})

btnLogin.addEventListener('click', () => {

    modal.classList.add('active')
})

btnClose.addEventListener('click', () => {

    modal.classList.remove('active')
})

modal.addEventListener('click', )
