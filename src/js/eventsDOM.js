export function eventsDOM(){
    const btn = document.querySelector('.toolbar__search')
    const background = document.querySelectorAll('.wrapper')
    const btnClose = document.querySelector('.popup__btn--close')
    const popup = document.querySelector('.popup')

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
    }}




    
    btn.addEventListener('click', openPopup)
    btnClose.addEventListener('click', closePopup)
    document.body.addEventListener('click', closePopup)
}