function setIcon(place, code, hour){
    if (code === 210 || code === 211) {
        place.setAttribute('src', 'dist/img/thunder.png')
    } else if (code >= 200 && code < 232) {
        place.setAttribute('src', 'dist/img/thunderrain.png')
    } else if (code >= 300 && code <= 321 || code >= 520 && code <= 522 || code === 531) {                        
        place.setAttribute('src', 'dist/img/rain.png')
    } else if (code === 500 && hour <= 17){
        place.setAttribute('src', 'dist/img/rainandsunny.png')
    } else if (code === 500){
        place.setAttribute('src', 'dist/img/rainandmoon.png')
    } else if (code >= 500 && code <= 504 && hour <= 17) {                        
        place.setAttribute('src', 'dist/img/rainandsunny.png')
    } else if (code >= 500 && code <= 504) {                        
        place.setAttribute('src', 'dist/img/rainandmoon.png')
    } else if (code >= 600 && code <= 602 || code >= 620 && code <= 622) {                        
        place.setAttribute('src', 'dist/img/snow.png')
    } else if (code >= 611 && code <= 616 || code === 511) {                        
        place.setAttribute('src', 'dist/img/snowrain.png')
    } else if (code === 781) {                        
        place.setAttribute('src', 'dist/img/tornado.png')
    } else if (code === 701 || code === 741) {                        
        place.setAttribute('src', 'dist/img/fog.png')
    } else if (code === 800 && hour <= 17) {
        place.setAttribute('src', 'dist/img/sun.png')
    } else if (code === 800) {
        place.setAttribute('src', 'dist/img/moonfull.png')
    } else if (code === 801 || code === 802 && hour <= 17) {
        place.setAttribute('src', 'dist/img/cloudy.png')
    } else if (code === 801 || code === 802) {
        place.setAttribute('src', 'dist/img/mooncloud.png')
    } else if (code === 803 || code === 804 && hour <= 17) {
        place.setAttribute('src', 'dist/img/cloudypart.png')
    } else if (code === 803 || code === 804) {
        place.setAttribute('src', 'dist/img/mooncloudyall.png')
    }
}

const setColor = (place, code, hour) => {
    if (code === 210 || code === 211) {
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(0,126,247,1) 0%, rgba(3,39,173,1) 100%)'
    } else if (code >= 200 && code < 232) {
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(0,126,247,1) 0%, rgba(3,39,173,1) 100%)'
    } else if (code >= 300 && code <= 321 || code >= 520 && code <= 522 || code === 531) {                        
       place.style.backgroundImage = 'linear-gradient(273deg, rgba(84,191,252,1) 0%, rgba(17,150,237,1) 100%)'
    } else if (code === 500 && hour <= 17){
       place.style.backgroundImage = 'linear-gradient(273deg, rgba(84,191,252,1) 0%, rgba(17,150,237,1) 100%)'
    } else if (code === 500){
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(0,126,247,1) 0%, rgba(3,39,173,1) 100%)'
    } else if (code >= 500 && code <= 504 && hour <= 17) {                        
       place.style.backgroundImage = 'linear-gradient(273deg, rgba(71,214,243,1) 0%, rgba(86,199,244,1) 100%)'
    } else if (code >= 500 && code <= 504) {                        
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(0,126,247,1) 0%, rgba(3,39,173,1) 100%)'
    } else if (code >= 600 && code <= 602 || code >= 620 && code <= 622) {                        
       place.style.backgroundImage = 'dist/img/snow.png'
    } else if (code >= 611 && code <= 616 || code === 511) {                        
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(107,189,214,1) 0%, rgba(24,188,200,1) 100%)'
    } else if (code === 781) {                        
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(168,168,168,1) 0%, rgba(91,91,91,1) 100%)'
    } else if (code === 701 || code === 741) {                        
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(168,168,168,1) 0%, rgba(91,91,91,1) 100%)'
    } else if (code === 800 && hour <= 17) {
       place.style.backgroundImage = 'linear-gradient(298deg, rgb(225 197 34) 0%, rgb(255 191 71) 100%)'
    } else if (code === 800) {
       place.style.backgroundImage = 'linear-gradient(272deg, rgba(101,108,248,1) 0%, rgba(78,71,226,1) 100%)'
    } else if (code === 801 || code === 802 && hour <= 17) {
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(107,189,214,1) 0%, rgba(24,188,200,1) 100%)'
    } else if (code === 801 || code === 802) {
       place.style.backgroundImage = 'linear-gradient(273deg, rgba(71,214,243,1) 0%, rgba(86,199,244,1) 100%)'
    } else if (code === 803 || code === 804 && hour <= 17) {
       place.style.backgroundImage = 'linear-gradient(293deg, rgba(107,189,214,1) 0%, rgba(24,188,200,1) 100%)'
    } else if (code === 803 || code === 804) {
       place.style.backgroundImage = 'linear-gradient(273deg, rgba(71,214,243,1) 0%, rgba(86,199,244,1) 100%)'
    }
}

const windDirection = deg => {
    if (deg >= 337.5 || deg < 22.5) {
        return 'Północ'
    } else if (deg >= 22.5 && deg < 67.5) {
        return 'Północny-wschód'
    } else if (deg >= 67.5 && deg < 112.5) {
        return "Wschód"
    } else if (deg >= 112.5 && deg < 157.5) {
        return 'Południowy-wschód'
    } else if (deg >= 157.5 && deg < 202.5) {
        return 'Południe'
    } else if (deg >= 202.5 && deg < 247.5) {
        return 'Południowy-zachód'
    } else if (deg >= 247.5 && deg < 292.5) {
        return 'Zachód'
    } else if (deg >= 292.5 && deg < 337.5) {
        return 'Północny-zachód'
    }
}

const checkText = text => {
    if (text.length > 20) {
        text = text.slice(0, 20) + "..."
    }
    text = text.charAt(0).toUpperCase() + text.slice(1)
    return text
}

const timeSun = data => {
    const hours = Math.floor(data / 3600) % 24 + 2
    const minutes = Math.floor((data % 3600) / 60)
    const hoursString = hours.toString().padStart(2, '0')
    const minutesString = minutes.toString().padStart(2, '0')
    return `${hoursString}:${minutesString}`
}

function searchDate(time, howMany) {
    const today = new Date();
    const newDay = new Date(today);
    newDay.setDate(newDay.getDate() + howMany);
    const newDate = newDay.toISOString().split('T')[0] + time
    return newDate
}

const dateTomorrow = data => {
    const tomorrowSix = data.find(el => el.dt_txt === searchDate(' 06:00:00', 1))
    const tomorrowTwelve = data.find(el => el.dt_txt === searchDate(' 12:00:00', 1))
    const tomorrowEighteen = data.find(el => el.dt_txt === searchDate(' 18:00:00', 1))
    
    return {
        six: tomorrowSix,
        twelve: tomorrowTwelve,
        eighteen: tomorrowEighteen
    }

}

const dateDayAfterTomorrow = data => {
    const DATsix = data.find(el => el.dt_txt === searchDate(' 06:00:00', 2))
    const DATtwelve = data.find(el => el.dt_txt === searchDate(' 12:00:00', 2))
    const DATeighteen = data.find(el => el.dt_txt === searchDate(' 18:00:00', 2))
    
    return {
        six: DATsix,
        twelve: DATtwelve,
        eighteen: DATeighteen
    }
}

const getNameDate = howMany => {
    const now = new Date()
    now.setDate(now.getDate() + howMany)
    const dayOfWeek = now.toLocaleString('pl', {weekday: 'long'})
    return dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
}

const dateThirdDay = data => {
    const day = getNameDate(3)
    const thirdDaysix = data.find(el => el.dt_txt === searchDate(' 06:00:00', 3))
    const thirdDaytwelve = data.find(el => el.dt_txt === searchDate(' 12:00:00', 3))
    const thirdDayeighteen = data.find(el => el.dt_txt === searchDate(' 18:00:00', 3))

   return{
    day,
    six: thirdDaysix,
    twelve: thirdDaytwelve,
    eighteen: thirdDayeighteen
   }
}

const dateFourDay = data => {
    const day = getNameDate(4)
    const fourDaysix = data.find(el => el.dt_txt === searchDate(' 06:00:00', 4))
    const fourDaytwelve = data.find(el => el.dt_txt === searchDate(' 12:00:00', 4))
    const fourDayeighteen = data.find(el => el.dt_txt === searchDate(' 18:00:00', 4))

   return{
    day,
    six: fourDaysix,
    twelve: fourDaytwelve,
    eighteen: fourDayeighteen
   }
}

export default {
    setIcon,
    checkText,
    setColor,
    windDirection,
    timeSun,
    dateTomorrow,
    dateDayAfterTomorrow,
    dateThirdDay,
    dateFourDay
}