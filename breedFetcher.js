const request = require('request');
const arg = process.argv[2];

request("https://api.thecatapi.com/v1/breeds/", function(error, response, body) {
  if (error) {
    console.log("Error: Invalid URL");
  } else {

    const data = JSON.parse(body);
    
    let found = false;
    for (const breed in data) {
      if (data[breed]['name'] === arg) {
        console.log(data[breed]['description']);
        found = true;
      }
    }

    if (!found) {
      console.log("Error: Breed not found");
    }

  }
});

