import { getApi } from './api.min.js'
import sortFunctions from './sortOptions.min.js'
import renderWebsite from './renderWebsite.min.js'
import { eventsDOM } from './eventsDOM.min.js'


async function loadingPage(){
    try{
        const response = await getApi()
        setWeather(response)
        setTime()
        eventsDOM()
    }
    catch (error){
        console.log('Błąd:', error);
    }
}

function setWeather(date){
    renderWebsite.currentWeather(date.list[0], sortFunctions)
    renderWebsite.othersWeather(date.city, sortFunctions)
}










// zamiast tego napisać funkcje ktora pokazuje czas w danym miejscowości za pomoca api
function setTime(){
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







// gumofilce
loadingPage()






















//////////////////////////////////////////


const btnSearch = document.querySelector('.popup__btn--send')
const searchText = document.querySelector('.search-text')
const btnSvg = document.querySelector('.popup__svg')
// const popup = document.querySelector('.popup')
const input = document.querySelector('.popup__input')




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