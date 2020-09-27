const handleCities = (req, res, fs) => {
    fs.readFile('cities.txt', 'utf8', function(err, data) {
        if(!data){
            console.log(err);
            return res.status(400).json('No City found');
        }
        else{
            return res.status(200).json(data.split('-'));
        }
      });
};

module.exports = {
    handleCities:handleCities
}