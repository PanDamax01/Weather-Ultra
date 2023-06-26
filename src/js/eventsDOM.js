const btn = document.querySelector('.toolbar__search')
const background = document.querySelectorAll('.wrapper')

const btnClose = document.querySelector('.popup__btn--close')
const btnSearch = document.querySelector('.popup__btn--send')
const popup = document.querySelector('.popup')
const input = document.querySelector('.popup__input')

const searchText = document.querySelector('.search-text')
const btnSvg = document.querySelector('.popup__svg')

const errorModal = document.querySelector('.error')
const errorText = document.querySelector('.error__text')
const errorBtn = document.querySelector('.error__x')
const cityRegex = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/

const addBlur = () => {
    background.forEach(el => el.classList.add('blur'))
}

const removeBlur = () => {
    background.forEach(el => el.classList.remove('blur'))
}

const resetPopup = () => {
    popup.style.transform = '';
    input.value = '';
}


const openPopup = () => {
    btnSearch.classList.remove('antyspam')                                                 
    popup.style.transform = 'translate(-50%,-50%)'
    addBlur()
}
const closePopup = e => {
    if( btnClose.contains(e.target) || e.target === document.body){
        resetPopup()
        removeBlur()
}}

const resetAnimation = () => {
    popup.classList.remove('move-shake')
    input.classList.remove('add-red')
    searchText.style.visibility = 'visible'
    btnSvg.classList.remove('move-left')
}

const animateBtnSearch = () => {
    btnSearch.style.backgroundColor = 'rgb(108, 249, 108)'
    btnSvg.classList.add('move-left')
    searchText.style.visibility = 'hidden'
}

const send = () => {
    btnSearch.style.backgroundColor = 'rgb(255, 255, 255)'                                 
    resetAnimation()
    removeBlur()
    resetPopup()
}

const animeteError = () => {
    openModalErr()
    popup.classList.add('move-shake')
    input.classList.add('add-red')
    setTimeout(closeModalErr, 20_000)
    setTimeout(resetAnimation, 1200)
}

const openModalErr = () => {
    errorModal.style.transform = 'translate(-50%,0)'
}
const closeModalErr = () => {
    errorModal.style.transform = 'translate(-50%, -100px)'
}

const checkButton = () => {
    animateBtnSearch()
    setTimeout(waiting, 1000)
    
    function waiting() {
        if (input.value === '' && !btnSearch.classList.contains('antyspam')) {
            errorText.textContent = 'Błąd: Nie wprowadzono treści!'
            animeteError()  
        } else if(!cityRegex.test(input.value) && !btnSearch.classList.contains('antyspam')){
            errorText.textContent = 'Błąd: Źle wprowadzona miejscowość!'
            animeteError()
        }
        else{
            btnSearch.classList.add('antyspam')
            send()
        }
    }
}

function eventsDOM(){
    btn.addEventListener('click', openPopup)
    btnClose.addEventListener('click', closePopup)
    document.body.addEventListener('click', closePopup)
    btnSearch.addEventListener('click', checkButton)
    input.addEventListener('keyup', event => event.keyCode === 13 ? checkButton():null)
    errorBtn.addEventListener('click', closeModalErr)
}

function setTime(){
    const now = new Date()
    const day = now.getDate()
    const mounth = now.getMonth() + 1
    document.querySelector('.main-info__date').textContent = `${lz(day)}.${lz(mounth)}`

    function lz(i) {
        return `${i}`.padStart(2, '0');
    }
      
    function time() {
        const now = new Date();
        const textTime = `${lz(now.getHours())}:${lz(now.getMinutes())}`;
        document.querySelector('.main-info__time').textContent = textTime
    };
    setInterval(time, 1000);
}

export function checkCityApi(){
    errorText.textContent = 'Błąd: Nie ma takiej miejscowości!'
    openModalErr()
    setTimeout(closeModalErr, 20_000)
}

export function events(){
    eventsDOM()
    setTime()
}