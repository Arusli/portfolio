//Dom variables
const cityInput = document.querySelector(".city-input");
const stateInput = document.querySelector(".state-input")
const button = document.querySelector(".button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector('h2');

//API template
//http://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
// http://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key}

//API variables
const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '3c3ef70f976ee67df3739b2782ffff6c';
const apiKeyString = '&appid=' + apiKey;
const countryCode = 'us';

//Fetch API function
function makeRequest() {
    //why can't I have these consts outside?
    const queryString = '?q=' + cityInput.value + ',' + stateInput.value + ',' + countryCode + '&units=imperial';
    const endpoint = url + queryString + apiKeyString;
    //
    try{
        console.log(endpoint);
        fetch(endpoint)
        .then((response) => {
            return response.json();
        })
       .then((data) => {
            if (data.cod === 200 && states.includes(stateInput.value.toUpperCase())) {
                console.log(data);
                h2.innerHTML = data.name + ', ' + stateInput.value.toUpperCase() + '<br>' + Math.floor(data.main.temp) + '\xB0F' + '<br>' + data.weather[0].description;
                cityInput.value = '';
                stateInput.value = '';
            } else {
                console.log(data);
                h2.innerHTML = 'City not found.'
                cityInput.value = '';
                stateInput.value = '';
            }
         }) 
        }
    catch(e) {
        console.log(e);
        h2.innerHTML = e;
    }
  } //end of makeRequest()

//Original working code backup
// fetch(endpoint)
// .then(response => response.json())
// .then((data) => {
//     console.log(data);
//     h2.innerHTML = data.name + ', ' + inputField.value + '<br>' + Math.floor(data.main.temp) + ' degrees' + '<br>' + data.weather[0].description;
//     inputField.value = '';
//     });

//event listener
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 13 && cityInput.value !== '' && stateInput.value !== '') {
        makeRequest();     
    }
})
