import { getApi } from './api.min.js'


async function loadingPage(){
    try{
        const response = await getApi()
        console.log(response);
    }
    catch (error){
        console.log('Błąd:', error);
    }
}
loadingPage()























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
    }
}



btn.addEventListener('click', openPopup)
btnClose.addEventListener('click', closePopup)
document.body.addEventListener('click', closePopup)


//////////////////////////////////////////


const btnSearch = document.querySelector('.popup__btn--send')
const searchText = document.querySelector('.search-text')
const btnSvg = document.querySelector('.popup__svg')
// const popup = document.querySelector('.popup')
const input = document.querySelector('.popup__input')

// btn.addEventListener('click', ()=>{
//     background.forEach(el =>{
//         el.style.transition = 'filter .3s'
//         el.style.filter = 'blur(7px)'
//         el.style.userSelect = 'none'
//         el.style.pointerEvents = 'none'
//     })
//     popup.style.transition = 'transform .6s'
//     popup.style.transform = 'translate(-50%,-50%)'
// })



btnSearch.addEventListener('click', ()=>{
    btnSearch.classList.toggle('lista')
    btnSvg.classList.toggle('move-left')
    let err = 1

    if (btnSearch.classList.contains('lista') && err > 0) {
        searchText.style.visibility = 'hidden'
        
        setTimeout(() => {
            popup.classList.add('move-shake')
            input.classList.add('add-red')
        }, 1000);
    }else{
        searchText.style.visibility = 'visible'
        popup.classList.remove('move-shake')
        input.classList.remove('add-red')
    }
    
})