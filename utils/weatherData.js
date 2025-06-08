var request = require('request')

const openweathermap = {
    BASE_URL : "https://api.openweathermap.org/data/2.5/weather?",
}

const apiKey = process.env.WEATHER_API_KEY;
<<<<<<< HEAD
=======
// console.log(apiKey)
>>>>>>> c05f7cbd2c8bbb1fe7a3d039f45ffeda9f01901f

const weatherData = (zipcode, callback) => {
    const url = openweathermap.BASE_URL +
        "zip=" + zipcode +
        ",in" +
        "&appid=" + apiKey +    
        "&units=metric"; 
<<<<<<< HEAD
=======
    console.log(url);
>>>>>>> c05f7cbd2c8bbb1fe7a3d039f45ffeda9f01901f

    request({ url, json: true }, (error, data) => { 
        if (error) {
            callback(true, "Unable to fetch data : " + error);
        }
        callback(false, data?.body)
    })
}


module.exports = weatherData;
