const Weather = require('./weather')

describe('Create Weather', () => {
  it ('Creates Weather Object', () => {

    weather_attr = {weather: 
    [{ main:'Clouds' }], 
    name:'London', 
    main: { temp: 10.62, feels_like: 8.99, humidity: 48}
    }
    
    today = new Weather(weather_attr);
    expect(today.getCity()).toBe('London');
    expect(today.getWeather()).toBe('Clouds');
    expect(today.getTemp()).toBe(10.62);
    expect(today.getFeelsLike()).toBe(8.99);
    expect(today.getHumidity()).toBe(48);
  });
});
