const apiLink = 'https://api.openweathermap.org/data/2.5/forecast?q='
const apiKey = '&appid=de4b6f094e32c006acaedd690e3fba3d'
const units = '&units=metric'
const lang = '&lang=pl'
let city = 'Kraków'

export async function getApi(){
    let url = apiLink + city + apiKey + units + lang
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
        }
    catch (error) {
        throw new Error('Wystąpił błąd w funkcji getApi(): ' + error);
        }
}
getApi()

// const date = getApi()
// console.log(date);