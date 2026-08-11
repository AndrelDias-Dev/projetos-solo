const btnTheme = document.querySelector('.btn-theme');
const body = document.querySelector('body')

btnTheme.addEventListener('click', () => {
    body.classList.toggle('dark-theme')
})