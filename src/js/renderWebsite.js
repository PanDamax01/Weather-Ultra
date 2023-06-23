const currentWeather = (date, module) => {
    document.querySelector('.main-info__temp').textContent = Math.floor(date.main.temp) + '°C'
    document.querySelector('.main-info__state').textContent = module.checkText(date.weather[0].description)
    document.querySelector('.speed-windy').textContent = date.wind.speed + 'm/s'
    document.querySelector('.clouds').textContent = date.clouds.all + '%'
    document.querySelector('.precipitation').textContent = module.checkPrecipitition(date.pop) + '%'
    document.querySelector('.wind-deg').textContent = module.windDirection(date.wind.deg)
    module.setIcon(document.querySelector('.main-info__img'), 500, 19)
    console.log(date.weather[0].id); //zamiast 500 ma być clg // oraz jak obliczyc godzine w danej miejscowości
}

const othersWeather = (date, module) => {
    document.querySelector('.sunrise').textContent = module.timeSun(date.sunrise)
    document.querySelector('.sunset').textContent = module.timeSun(date.sunset)
    document.querySelector('.main-info__city').textContent = date.name
}

export default {
    currentWeather,
    othersWeather
}



