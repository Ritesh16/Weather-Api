const handleCities = (req, res, fs) => {
    fs.readFile('cities.txt', 'utf8', function(err, data) {
        if(!data){
            return res.status(200).json([]);
        }
        else{
            return res.status(200).json(data.split('-'));
        }
      });
};

const handleUpdateCity = (req, res, fs) => {
    const {city} = req.body;
    fs.writeFile('cities.txt', city, function (err) {
        if (err) throw err;
        return res.status(200).json(city);
      });
};

const handleAddCity = (req, res, fs) => {
    const {city} = req.body;
    var newCity;

    if(!city){
        return res.status(400).json('Invalid value of city is passed.');
    }

    fs.readFile('cities.txt', 'utf8', function(err, data) {
        if(!data){
            newCity = city;
        }
        else{
            var cities = data.split('-');
            if(cities.length >= 15){

            }

            var existingCity = cities.filter(x=> x.toLowerCase() == city.toLowerCase());
       
            if(existingCity.length>0){
                var ob = {
                    cities:cities,
                    error:'City already exist!!'
                }
                return res.status(400).json(ob);
            }
            else{
                newCity =  "-" + city;
            }
        }

        fs.appendFile('cities.txt', newCity, function (err) {
            if (err) { 
                return res.status(500),json(err);
            }
            else{
                data = data + newCity;
                var dataArray= data.split('-');
                return res.status(200).json(dataArray);
            }
    
          });
      });


     
};

module.exports = {
    handleCities:handleCities,
    handleAddCity:handleAddCity,
    handleUpdateCity:handleUpdateCity
}