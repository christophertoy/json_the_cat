const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, resp) => {
    const data = JSON.parse(resp.body);  
    if (error || data[0] === undefined) {
      callback(error, null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };

