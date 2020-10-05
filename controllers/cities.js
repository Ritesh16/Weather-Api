const handleCities = (req, res, fs) => {
    fs.readFile('cities.txt', 'utf8', function(err, data) {
        if(!data){
            return res.status(400).json('No City found');
        }
        else{
            return res.status(200).json(data.split('-'));
        }
      });
};

const handleAddCity = (req, res, fs) => {
    const {city} = req.body;
    console.log('Adding city' + city);
    var newCity;

    fs.readFile('cities.txt', 'utf8', function(err, data) {
        if(!data){
            newCity = city;
        }
        else{
            newCity =  "-" + city;
        }

        console.log('Got cities');

        fs.appendFile('cities.txt', newCity, function (err) {
            if (err) { 
                console.log(err);
                return res.status(500),json(err);
            }
            else{
                data = data + newCity;
                var dataArray= data.split('-');
                console.log(dataArray);
                return res.status(200).json(dataArray);
            }
    
          });
      });


     
};

module.exports = {
    handleCities:handleCities,
    handleAddCity:handleAddCity
}