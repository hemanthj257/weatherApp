var request = require('request')

const openweathermap = {
    BASE_URL : "https://api.openweathermap.org/data/2.5/weather?",
}

const apiKey = process.env.WEATHER_API_KEY;
// console.log(apiKey)

const weatherData = (zipcode, callback) => {
    const url = openweathermap.BASE_URL +
        "zip=" + zipcode +
        ",in" +
        "&appid=" + apiKey +    
        "&units=metric"; 
    console.log(url);

    request({ url, json: true }, (error, data) => { 
        if (error) {
            callback(true, "Unable to fetch data : " + error);
        }
        callback(false, data?.body)
    })
}


module.exports = weatherData;
