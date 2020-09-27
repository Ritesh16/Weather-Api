const fetch = require('node-fetch');
const api_key = '';

const handleWeather = (req, res) => {
    const {city,state} = req.params;
    var search=city;
    if(state){
        search=city+','+state;
    }

    const url = `https://api.weatherbit.io/v2.0/current?city=${search}&key=${api_key}`;
    fetch(url).then(response => response.json())
              .then(data => {
                  return res.status(200).json(data);
              })
              .catch(error => res.status(400).json('Error in getting weather data'));
    
};

module.exports = {
    handleWeather: handleWeather
};