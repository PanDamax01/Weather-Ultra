const currentWeather = (data, module) => {
    document.querySelector('.main-info__temp').textContent = Math.floor(data.main.temp) + '°C'
    document.querySelector('.main-info__state').textContent = module.checkText(data.weather[0].description)
    document.querySelector('.speed-windy').textContent = data.wind.speed + 'm/s'
    document.querySelector('.clouds').textContent = data.clouds.all + '%'
    document.querySelector('.precipitation').textContent = Math.floor(data.pop * 100) + '%'
    document.querySelector('.wind-deg').textContent = module.windDirection(data.wind.deg)
    module.setIcon(document.querySelector('.main-info__img'), data.weather[0].id, new Date().getHours())
}

const othersWeather = (data, module) => {
    document.querySelector('.sunrise').textContent = module.timeSun(data.sunrise)
    document.querySelector('.sunset').textContent = module.timeSun(data.sunset)
    document.querySelector('.main-info__city').textContent = data.name
}

const tomorrowWeather = (data, module) => {
    const newData = module.dateTomorrow(data)
    document.querySelector('.tomorrow-six-temp').textContent = Math.floor(newData.six.main.temp) + '°C'
    document.querySelector('.tomorrow-six-pop').textContent = Math.floor(newData.six.pop * 100) + '%'
    module.setIcon(document.querySelector('.tomorrow-six-img'), newData.six.weather[0].id, 8)
    document.querySelector('.tomorrow-twelve-temp').textContent = Math.floor(newData.twelve.main.temp) + '°C'
    document.querySelector('.tomorrow-twelve-pop').textContent = Math.floor(newData.twelve.pop * 100) + '%'
    module.setIcon(document.querySelector('.tomorrow-twelve-img'), newData.twelve.weather[0].id, 12)
    document.querySelector('.tomorrow-eighteen-temp').textContent = Math.floor(newData.eighteen.main.temp) + '°C'
    document.querySelector('.tomorrow-eighteen-pop').textContent = Math.floor(newData.eighteen.pop * 100) + '%'
    module.setIcon(document.querySelector('.tomorrow-eighteen-img'), newData.eighteen.weather[0].id, new Date().getHours())
}

const dayAfterTomorrow  = (data, module) => {
    const newData = module.dateDayAfterTomorrow(data)
    document.querySelector('.DAT-six-temp').textContent = Math.floor(newData.six.main.temp) + '°C'
    document.querySelector('.DAT-six-pop').textContent = Math.floor(newData.six.pop * 100) + '%'
    module.setIcon(document.querySelector('.DAT-six-img'), newData.six.weather[0].id, 8)
    document.querySelector('.DAT-twelve-temp').textContent = Math.floor(newData.twelve.main.temp) + '°C'
    document.querySelector('.DAT-twelve-pop').textContent = Math.floor(newData.twelve.pop * 100) + '%'
    module.setIcon(document.querySelector('.DAT-twelve-img'), newData.twelve.weather[0].id, 8)
    document.querySelector('.DAT-eighteen-temp').textContent = Math.floor(newData.eighteen.main.temp) + '°C'
    document.querySelector('.DAT-eighteen-pop').textContent = Math.floor(newData.eighteen.pop * 100) + '%'
    module.setIcon(document.querySelector('.DAT-eighteen-img'), newData.eighteen.weather[0].id, 8)
}

export default {
    currentWeather,
    othersWeather,
    tomorrowWeather,
    dayAfterTomorrow
}



