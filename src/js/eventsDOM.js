export function eventsDOM(){
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


    const openPopup = () =>{
        background.forEach(el =>{
            el.classList.add('blur')
        })
        popup.style.transform = 'translate(-50%,-50%)'
    }
    const closePopup = (e) =>{
        if( btnClose.contains(e.target) || e.target === document.body ){
        background.forEach(el =>{
            el.classList.remove('blur')
        })
        popup.style.transform = ''
        input.value = ''
    }}

    const checkButton = () => {
        btnSearch.style.backgroundColor = 'rgb(108, 249, 108)'
        btnSvg.classList.toggle('move-left')
        searchText.style.visibility = 'hidden'

        const waiting = () => {
            if (input.value === '') {
                errorModal.style.transform = 'translate(-50%,0)'
                errorText.textContent = 'Błąd: Nie wprowadzono treści!'
                popup.classList.add('move-shake')
                input.classList.add('add-red')
                setTimeout(closeModalErr, 20_000)
            } else{
                sendCity() // dopisze hu
            }
        }

        setTimeout(waiting, 900)
        setTimeout(() => {
            popup.classList.remove('move-shake')
            input.classList.remove('add-red')
            searchText.style.visibility = 'visible'
            btnSvg.classList.toggle('move-left')
        }, 1600);
    }

    const closeModalErr = () => {
        errorModal.style.transform = 'translate(-50%, -100px)'
    }

    const sendCity = () =>{                                     
        background.forEach(el =>{
            el.classList.remove('blur')
        })
        popup.style.transform = ''
        input.value = ''
    }

    btn.addEventListener('click', openPopup)
    btnClose.addEventListener('click', closePopup)
    document.body.addEventListener('click', closePopup)
    btnSearch.addEventListener('click', checkButton)
    errorBtn.addEventListener('click', closeModalErr)
}

export function setTime(){
    const now = new Date()
    const day = now.getDate()
    const mounth = now.getMonth() + 1
    document.querySelector('.main-info__date').textContent = `${day}.${lz(mounth)}`

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