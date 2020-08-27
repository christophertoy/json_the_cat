const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  const data = JSON.parse(body);
  if (data.length === 0) { // if data returns an empty array
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});

