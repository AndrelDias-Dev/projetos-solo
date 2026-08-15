const filter = document.querySelector('.filter')
const dropFilter = document.querySelector('.dropdown-filter')

dropFilter.classList.add('active')

filter.addEventListener('click', () => {
    filter.classList.toggle('active')
    dropFilter.classList.toggle('active')
})

