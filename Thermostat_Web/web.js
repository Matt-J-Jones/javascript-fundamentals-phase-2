const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

app.get('/temperature', (req, res) => {
  res.send('Temp is: ' + thermostat.getTemperature());
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send('Temp is: ' + thermostat.getTemperature());
});

app.post('/up', (req, res) => {
  thermostat.up();
  res.send('Temp is: ' + thermostat.getTemperature());
});

app.post('/down', (req, res) => {
  thermostat.down();
  res.send('Temp is: ' + thermostat.getTemperature());
});

app.post('/powersaving', (req, res) => {
  thermostat.setPowerSavingMode(true);
  res.send('Powersaving ON');
});

app.delete('/powersaving', (req, res) => {
  thermostat.setPowerSavingMode(false);
  res.send('Powersaving OFF');
});

app.get('/energyusage', (req, res) => {
  res.send('Energy Usage is: ' + thermostat.energy_usage());
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);