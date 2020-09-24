const request = require('request');
const fs = require('fs');

const userInput = process.argv.slice(2);
const url = userInput[0];
const path = userInput[1];

if (url === '' || path === '' || !url || !path) {
  process.exit();
}

request(url, (error, response, body) => {
  if (error) {
    console.log(error.code);
    process.exit(0);
  } 

  if(response.statusCode !== 200) {
    console.log('Something went wrong! -->', response.statusCode);
    process.exit(0);
  }

  console.log(response.statusCode);
  fs.writeFile(path, body, (error) => {
    if (error) throw error;
    console.log('The file has been saved!');
  });
});