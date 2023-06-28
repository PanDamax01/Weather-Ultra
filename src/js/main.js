import { getApi } from './api.min.js'
import sortFunctions from './sortFunctions.min.js'
import renderWebsite from './renderWebsite.min.js'
import { events, checkCityApi } from './eventsDOM.min.js'

let city = 'Kraków'

async function loadingPage(){
    try{
        const response = await getApi(city)
        setWeather(response)
    }
    catch (error){
        console.log('Błąd:', error)
        checkCityApi()
    }
}
events()

function setWeather(data){
    renderWebsite.currentWeather(data.list[0], sortFunctions)
    renderWebsite.othersWeather(data.city, sortFunctions)
    renderWebsite.tomorrowWeather(data.list, sortFunctions)
    renderWebsite.dayAfterTomorrow(data.list, sortFunctions)
    renderWebsite.thirdDay(data.list, sortFunctions)
    renderWebsite.fourdDay(data.list, sortFunctions)
}

const checkCity = () => {
    if (/^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/.test(document.querySelector('.popup__input').value)) {
        city = document.querySelector('.popup__input').value 
        loadingPage()
    }
}
document.querySelector('.popup__btn--send').addEventListener('click', checkCity)
document.querySelector('.popup__input').addEventListener('keyup', event => event.keyCode === 13 ? checkCity():null)


// gumofilce
loadingPage()