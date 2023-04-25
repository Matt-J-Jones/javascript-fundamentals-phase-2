const apiKey = require('./apiKey');
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData.name);
    console.log(weatherData.weather[0].main);
    console.log(weatherData.main.temp);
    console.log(weatherData.main.feels_like);
    console.log(weatherData.main.humidity);
  });
