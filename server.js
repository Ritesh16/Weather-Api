const express = require('express');
const city = require('./controllers/cities');
const weather = require('./controllers/weather');
var fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json("Api is running");
});

app.get('/Cities', (req, res) => { city.handleCities(req, res, fs) });
app.post('/Cities', (req, res) => { city.handleAddCity(req, res, fs) });
app.put('/Cities', (req, res) => { city.handleUpdateCity(req, res, fs) });


app.get('/Weather/city/:city/state/:state', (req, res) => { weather.handleWeather(req, res)});

// app.listen(3001, ()=> {
//     console.log('app is running on port 3001');
// });

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`app is running on port ${process.env.PORT}`);
  });
  

