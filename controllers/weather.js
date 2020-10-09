const fetch = require('node-fetch');
const api_key = '6418287dfb26432397fb082ebadb8356';

const handleWeather = (req, res) => {
    const {city,state} = req.params;
    var search=city;
    if(state){
        search=city+','+state;
    }

    //https://api.weatherbit.io/v2.0/current?city=middletown,de&key=6418287dfb26432397fb082ebadb8356
    const url = `https://api.weatherbit.io/v2.0/current?city=${search}&key=${api_key}`;
    fetch(url).then(response => response.json())
              .then(data => {
                  return res.status(200).json(data);
              })
              .catch(error => res.status(400).json('Error in getting weather data'));

//     var ob={
//         data: [
//             {
//             rh: 46,
//             pod: "d",
//             lon: -75.71632,
//             pres: 1023.7,
//             timezone: "America/New_York",
//             ob_time: "2020-10-04 15:20",
//             country_code: "US",
//             clouds: 0,
//             ts: 1601824800,
//             solar_rad: 627.9,
//             state_code: state,
//             city_name: city,
//             wind_spd: 4,
//             wind_cdir_full: "south",
//             wind_cdir: "S",
//             slp: 1026.6,
//             vis: 5,
//             h_angle: -30,
//             sunset: "22:39",
//             dni: 843.95,
//             dewpt: 7.4,
//             snow: 0,
//             uv: 6.57726,
//             precip: 0,
//             wind_dir: 180,
//             sunrise: "11:02",
//             ghi: 627.9,
//             dhi: 105.05,
//             aqi: 50,
//             lat: 39.44956,
//             weather: {
//             icon: "c01d",
//             code: 800,
//             description: "Clear sky"
//             },
//             datetime: "2020-10-04:15",
//             temp: 19.4,
//             station: "DEL13",
//             elev_angle: 38.86,
//             app_temp: 18.6
//             }
//             ],
//             count: 1
//             };
    
//     return res.status(200).json(ob); 
    
 };

module.exports = {
    handleWeather: handleWeather
};