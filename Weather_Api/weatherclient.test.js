const WeatherClient = require('./weatherclient');
const Weather = require('./weather');

describe('Fetch Wether', () => {
  it('Returns promise of weather call', async () => {
    client = new WeatherClient(fetch);
    const weatherResults = await client.fetchWeatherData('London');
    expect(weatherResults.getCity()).toBe('London');
  })
})

describe('Weather Check', () => {
  it('Returns Mocked Weather Data From Api', async () => {
    const mockWeather = {
      weather: [{main:'Clouds'}], name: 'Madrid', main: { temp: 10.73, feels_like: 9.11, humidity: 48}
    };
    
    const mockFetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve(mockWeather)
    });

    const client = new WeatherClient();
    client.fetch = mockFetch;
    const result = await client.fetchWeatherData('London');
    expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('London'));

    expect(result.getCity()).toBe('Madrid');
  })
})
