const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/", function(error, response, body) {
    if (error) {
      callback("Couldn't reach API");
    } else {
      const data = JSON.parse(body);
      let description = "";
      
      let found = false;
      for (const breed in data) {
        if (data[breed]['name'] === breedName) {
          description = data[breed]['description'];
          found = true;
        }
      }

      if (!found) {
        callback("Breed not found");
      }

      callback(null, description);
    }
  });
};

module.exports = { fetchBreedDescription };