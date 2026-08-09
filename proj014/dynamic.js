const thumbs = document.querySelectorAll('.thumb-item')
const heroImage = document.querySelector('#comida1')

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {

        thumbs.forEach(item => {
            item.classList.remove('active')
        })

        thumb.classList.add('active')

        const image = thumb.querySelector('img')

        heroImage.src = image.src;
    })
})


