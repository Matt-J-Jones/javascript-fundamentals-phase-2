class Thermostat {
  constructor () {
    this.temp = 20;
    this.max_temp = 25;
    this.min_temp = 10;
  }
  
  getTemperature() {
    let tempJSON = JSON.stringify(this.temp);
    return tempJSON;
  }

  up() {
    if (this.temp < this.max_temp) {
      this.temp ++;
    }
  }

  down() {
    if (this.temp > this.min_temp){
      this.temp --;
    }
  }

  setPowerSavingMode(value) {
    if (value) {
      this.max_temp = 25;
    } else {
      this.max_temp = 32
    }
  }

  reset() {
    this.temp = 20;
  }

  energy_usage() {
    if (this.temp < 18) {
      return JSON.stringify('Low');
    } else if (this.temp <= 25) {
      return JSON.stringify('Medium');
    } else {
      return JSON.stringify('High');
    }
  }
}

module.exports = Thermostat;