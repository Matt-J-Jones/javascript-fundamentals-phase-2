const Thermostat = require('./thermostat');

describe('Thermostat Controls', () => {
  it ('returns base temp of 20', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it ('increases temp twice, returns 22', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it ('increases temp twice, decreases once, returns 21', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it ('ups temp 10 times, reaches max temp (with power saving), returns 25 (max)', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it ('reaches max temp (with power saving), turns off power saving, ups, returns 26', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(26);
  });

  it ('ups temp 10 times, resets thermostat, returns 20 (base)', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(30);
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it ('turns off power saving, ups 20 times, returns 32 (max w/o power saving)', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 30 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it ('ups temp 10 times, reaches max temp (with power saving), lowers 5 times, returns 20', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);

    for (let i = 0 ; i < 5 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(20);
  });

  it ('downs temp 15 times, returns 10 (min temp)', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });

  it ('checks thermostat energy usage at 15, 20, 30 - returns low, medium, high', () => {
    const thermostat = new Thermostat();

    for (let i = 0 ; i < 5 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(15);
    expect(thermostat.energy_usage()).toBe('Low');

    for (let i = 0 ; i < 5 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(20);
    expect(thermostat.energy_usage()).toBe('Medium');

    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(30);
    expect(thermostat.energy_usage()).toBe('High');
  });
})