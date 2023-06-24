import { getApi } from './api.min.js'
import sortFunctions from './sortOptions.min.js'
import renderWebsite from './renderWebsite.min.js'
import { eventsDOM, setTime } from './eventsDOM.min.js'

let obj = {
    city: 'Kraków'
}

async function loadingPage(){
    try{
        const response = await getApi(obj.city)
        setWeather(response)
    }
    catch (error){
        console.log('Błąd:', error);
        //pojawia sie ostrzezenie ze zla naza
        // i te aniacje
        // lub klasa 
        // i naprawic te pojawianie sie i odemowanie
    }
}
eventsDOM();
setTime()

function setWeather(date){
    renderWebsite.currentWeather(date.list[0], sortFunctions)
    renderWebsite.othersWeather(date.city, sortFunctions)
}

document.querySelector('.popup__btn--send').addEventListener('click', ()=>{
    if (document.querySelector('.popup__input').value !== '') {
        obj.city = document.querySelector('.popup__input').value 
        loadingPage()
    }
})







// zamiast tego napisać funkcje ktora pokazuje czas w danym miejscowości za pomoca api








// gumofilce
loadingPage()