const burger_button = document.querySelector('.burger_button')
burger_button.addEventListener('click', () => {
    let burger = document.querySelector('.burger-slip')
    burger.classList.toggle('open')

    let menu = document.querySelector('.header')
    menu.classList.toggle('Active')

    let body = document.querySelector('.body')
    body.classList.toggle('Freeze')
})