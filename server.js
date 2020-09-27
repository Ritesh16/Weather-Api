const express = require('express');
const city = require('./controllers/cities');
const weather = require('./controllers/weather');
var fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json("Api is running");
});

app.get('/Cities', (req, res) => { city.handleCities(req, res, fs) });
app.get('/Weather/city/:city/state/:state', (req, res) => { weather.handleWeather(req, res)});

app.listen(3000, ()=> {
    console.log('app is running on port 3000');
});
  

