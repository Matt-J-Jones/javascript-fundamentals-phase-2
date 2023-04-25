const apiKey = require('./apiKey');
let weatherData = null;
const Weather = require('./weather')

class WeatherClient {
  constructor(){
  }

  fetchWeatherData(city){
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    return fetch(apiUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      const weatherResults = new Weather(weatherData);
      return weatherResults;
    });
  }
}

module.exports = WeatherClient;