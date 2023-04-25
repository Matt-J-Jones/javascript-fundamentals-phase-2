class Weather {
  constructor(weatherData) {
    this.city = weatherData.name;
    this.weather = weatherData.weather[0].main;
    this.temp = weatherData.main.temp;
    this.feels_like = weatherData.main.feels_like;
    this.humidity = weatherData.main.humidity;
  }

  getCity() {
    return this.city;
  }

  getWeather() {
    return this.weather;
  }

  getTemp() {
    return this.temp;
  }

  getFeelsLike() {
    return this.feels_like;
  }

  getHumidity() {
    return this.humidity;
  }
}

module.exports = Weather;