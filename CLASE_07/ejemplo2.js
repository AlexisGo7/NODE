const {readFile} = require('fs');
readFile('./data/archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
}});