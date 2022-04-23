const breed = process.argv[2];

const breedSearch = function(breed) {
  const request = require('request');
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('Breed not found');
      return;
    }
    console.log(data[0].description);
    

  });
};
breedSearch(breed);