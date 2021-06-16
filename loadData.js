const fs = require('fs');
require('./db/connect');
require('colors');
const { Dog } = require('./schemas/index.js');

const dogsJson = JSON.parse(fs.readFileSync('./model/dogs.json', 'utf8'));
console.log(dogsJson);

(async () => {
  try {
    await Dog.insertMany(dogsJson);
    console.log('Data loaded');
  } catch (error) {
    console.error(`Error => ${error.message.red}`);
  } finally {
    process.exit('SIGINT');
  }
})();
