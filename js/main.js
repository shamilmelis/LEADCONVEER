const burger_button = document.querySelector('.burger_button')
burger_button.addEventListener('click', () => {
    let burger = document.querySelector('.burger-slip')
    burger.classList.toggle('open')

    let menu = document.querySelector('.header')
    menu.classList.toggle('Active')

    let body = document.querySelector('.body')
    body.classList.toggle('Freeze')
})

const paginationButton = document.querySelectorAll('.h-i-w_pagination_button')
const paginationElements = [
    {
        id: 1,
        number: '01',
        title: 'Регистрация и добавление проекта в систему',
        emoji_url: './assets/2/it_man.svg',
        content: `
        <p>1. Зарегистрируйтесь в нашем личном кабинете</p> 
        <p>2. При добавлении проекта вам необходимо указать URL (адрес) своего сайта</p>
        <p>3. Для вашего сайта будет сгенерирован уникальный код, который необходимо установить на свой сайт (в шаблоне сайта, перед тегом "head" </p>
`
    },
    {
        id: 2,
        number: '02',
        title: 'Выбор проекта и количества лидов',
        emoji_url: './assets/2/b_check.svg',
        content: `<p>После добавления проекта в систему, вам необходимо выбрать тот пакет и количество Лидов, которое вам необходимо.</p>`
    },
    {
        id: 3,
        number: '03',
        title: 'Оплата проекта',
        emoji_url: './assets/2/money_w.svg',
        content: `<p>Оплатить Лидов вы сможете пластиковой картой или безналичным переводом.</p>`
    },
    {
        id: 4,
        number: '04',
        title: 'Получение кода для сайта',
        emoji_url: './assets/2/lock.svg',
        content: `<p>После оплаты, система для вас сгенерирует код, который вам необходимо установить на свой сайт (в шаблоне сайта, перед тегом </head>).</p>`
    },
    {
        id: 5,
        number: '05',
        title: 'Начало получения Лидов',
        emoji_url: './assets/2/star_eyes.svg',
        content: `<p>В зависимости от вашей тематики (услуги или товара), 
а также объёма вашего трафика сайта система будет добавлять в личном кабинете контакты потенциальных клиентов, заинтересованных в вашей услуги и из вашего региона.</p>`
    }
]
paginationButton.forEach((el) => {
    el.addEventListener('click', () => {
        let paginationOrder = document.querySelector('.h-i-w_step_span')
        let paginationEmoji = document.querySelector('.h-i-w_emoji')
        let paginationTitle = document.querySelector('.h-i-w_step_text')
        let paginationContent = document.querySelector('.how-it-works_description_block')
        let obj = {
            id: 0,
            number: '',
            title: '',
            emoji_url: '',
            content: ``,
        }
        paginationElements.map(e => {
            if (e.id === parseInt(el.value)) {
                obj.id = e.id
                obj.number = e.number
                obj.title = e.title
                obj.emoji_url = e.emoji_url
                obj.content = e.content
                paginationOrder.innerHTML = obj.number
                paginationEmoji.src = obj.emoji_url
                paginationTitle.textContent = obj.title
                paginationContent.innerHTML = obj.content
            }
        })

        let buttons = document.querySelectorAll('.h-i-w_pagination_button')
        setTimeout(() => el.classList.add('Active'), 100)
        buttons.forEach((el) => el.classList.remove('Active'))
    })
})

const accordeonButton = document.querySelectorAll('.q-a_button')
accordeonButton.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('Close')
        el.parentElement.nextElementSibling.classList.toggle('Show')
        el.parentElement.classList.toggle('Selected')
    })
})