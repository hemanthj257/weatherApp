var weatherapi = '/weather'
const textBarButton = document.querySelector('.textBarButton')
const search = document.querySelector('input')
const weatherIcon = document.querySelector('.weatherIcon i')
const weatherCondition = document.querySelector('.weatherCondition')
const tempElement = document.querySelector('.temparature span')

const locationElement = document.querySelector('.place')
const dateElement = document.querySelector('.date')

const currentDate = new Date();
console.log(currentDate)

const options = { day: 'numeric', month: 'long'};

textBarButton.addEventListener('submit', (e) => {
    e.preventDefault()
    //verify 
    // console.log(search.value);
    locationElement.textContent = "Loading....";
    weatherIcon.className = "";
    weatherCondition.textContent = "";
    tempElement.textContent = "";
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);

    showData(search.value);
})

function showData(zipcode) {
    getWeatherData(zipcode, (result) => {
        //verify
        // console.log(result)
        if (result.cod == 200) {
            weatherIcon.className = "wi wi-day-cloudy"
            locationElement.textContent = result?.name;
            tempElement.textContent = (result?.main?.temp) + String.fromCharCode(176)
            weatherCondition.textContent = result?.weather[0]?.description?.toUpperCase()
        } else {
            locationElement.textContent = "City not Found";
        }
    })
}

function getWeatherData(zipcode, callback) {
    const locationapi = weatherapi + "?zipcode=" + zipcode;
    fetch(locationapi).then((response) => {
        response.json().then((response) => {
            callback(response)
        })
    })
}