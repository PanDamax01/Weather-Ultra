function setIcon(place, code, checkHaour){
    if (code >= 200 && code <= 202) {
        place.setAttribute('src', 'dist/img/rainandthunderstorm.svg')
    } else if (code > 202 && code < 300) {
        place.setAttribute('src', 'dist/img/thunderstorm.svg')
    } else if (code >= 300 && code <= 321) {
        place.setAttribute('src', 'dist/img/rain.svg')
    } else if (code === 500 && checkHaour <= 17) {
        place.setAttribute('src', 'dist/img/suncloudyrain.png')
    } else if (code === 500) {
        place.setAttribute('src', 'dist/img/cloudypart.gif')
    } else if (code >= 501 && code < 600) {
        place.setAttribute('src', 'dist/img/rain.svg')
    } else if (code >= 600 && code < 700) {
        place.setAttribute('src', 'dist/img/snow.webp')
    } else if (code === 800 && checkHaour <= 17) {
        place.setAttribute('src', 'dist/img/sunny.svg')
    } else if (code === 800) {
        place.setAttribute('src', 'dist/img/moon.svg')
    } else if (code >= 701 && code < 800) {
        place.setAttribute('src', 'dist/img/fog.png')
    } else if (code === 801 && checkHaour <= 17) {
        place.setAttribute('src', 'dist/img/sunnyandclody.svg')
    } else if (code === 801) {
        place.setAttribute('src', 'dist/img/mooncloudy.svg')
    } else if (code > 801 && code < 804 && checkHaour <= 17) {
        place.setAttribute('src', 'dist/img/sunnyandtwoclody.svg')
    } else if (code > 801 && code < 804) {
        place.setAttribute('src', 'dist/img/moonandtwocloudy.svg')
    } else if (code === 804) {
        place.setAttribute('src', 'dist/img/cloudy.svg')
    } else {
        place.setAttribute('src', 'img/error.png')
    }
}

const windDirection = deg => {
    if (deg >= 337.5 || deg < 22.5) {
        return "Północ";
    } else if (deg >= 22.5 && deg < 67.5) {
        return "Północny-wschód";
    } else if (deg >= 67.5 && deg < 112.5) {
        return "Wschód";
    } else if (deg >= 112.5 && deg < 157.5) {
        return "Południowy-wschód";
    } else if (deg >= 157.5 && deg < 202.5) {
        return "Południe";
    } else if (deg >= 202.5 && deg < 247.5) {
        return "Południowy-zachód";
    } else if (deg >= 247.5 && deg < 292.5) {
        return "Zachód";
    } else if (deg >= 292.5 && deg < 337.5) {
        return "Północny-zachód";
    }
}

const checkPrecipitition = precipitition => {
    if (precipitition === 0) {
        return 0
    } else if (precipitition === 1) {
        return 100
    } else if (precipitition >= 0.01 && precipitition <= 0.99) {
        return Math.floor(precipitition * 100)
    }
}

const checkText = text => {
    if (text.length > 20) {
        text = text.slice(0, 20) + "...";
    }
    text = text.charAt(0).toUpperCase() + text.slice(1);
    return text;
}

const timeSun = date => {
    const hours = Math.floor(date / 3600) % 24 + 2;
    const minutes = Math.floor((date % 3600) / 60);
    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');
    return `${hoursString}:${minutesString}`;
}

export default {
    setIcon,
    checkPrecipitition,
    checkText,
    windDirection,
    timeSun // ahhh to delete
}