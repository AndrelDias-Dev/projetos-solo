const btn = document.getElementById('btn-mobile')

function cliqueBotao() {
    const nav = document.getElementById('nav')

    nav.classList.toggle('active')
}





btn.addEventListener('click', cliqueBotao);