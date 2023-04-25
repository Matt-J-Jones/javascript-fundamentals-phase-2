const WeatherClient = require('./weatherclient');
const Weather = require('./weather');

describe('Fetch Wether', () => {
  it('Returns promise of weather call', async () => {
    client = new WeatherClient();
    const weatherResults = await client.fetchWeatherData('London');
    expect(weatherResults.getCity()).toBe('London');
  })
})

// describe('Weather Check', () => {
//   it('Returns Mocked Weather Data From Api', (done) => {
//     const mockWeather = {
//       fetchWeatherData: jest.fn(),
//     };

//     mockWeather.fetchWeatherData.mockResolvedValueOnce({
//       name: 'London', weather: [{main:'Clouds'}], main: { temp: 10.73,
//       feels_like: 9.11, humidity: 48}
//     });

//     const client = new WeatherClient();

//     const result = client.fetchWeatherData('London').then(() => {
//       expect(mockWeather.fetchWeatherData).toHaveBeenCalledWith('London');
//       expect(result.getCity()).toBe('London');
//       done();
//     })
//   })
// })