const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu-link')

btnMenu.addEventListener('click', () => {

    menu.classList.toggle('active')

    menuLink.forEach(link => link.addEventListener('click', () => {

         if (menu.classList.contains('active')) {
            menu.classList.remove('active') 
         } else {
            menu.classList.add('active')
            menu.classList.remove('active')
         }
    }))
})