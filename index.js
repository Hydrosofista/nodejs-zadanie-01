const randomComponent = require('./randomComponent');

// One random number
const randomNumber = randomComponent.getRandomNumber(1, 100);
console.log(`Losowa liczba całkowita z przedziału 1-100 to: ${randomNumber}`);

// Random string
const randomString = randomComponent.getRandomString(10);
console.log(`Losowy ciąg znaków o długości 10 to: ${randomString}`);

// Random numbers Array
const randomNumbersArray = randomComponent.getRandomNumbersArray(0, 254, 64);
console.log(`Tablica 64 losowych liczb całkowitych z przedziału 0-254 to: ${randomNumbersArray}`);



//--------------------------------------------------------------------------------
/* 

const min = 1;
const max = 100;
const length = 20;

// One random number
const randomNumber = randomComponent.getRandomNumber(min, max);
console.log(`Losowa liczba całkowita z przedziału ${min}-${max} to: ${randomNumber}`);

// Random string
const randomString = randomComponent.getRandomString(10);
console.log(`Losowy ciąg znaków o długości ${length} to: ${randomString}`);

// Random numbers Array
const randomNumbersArray = randomComponent.getRandomNumbersArray(min, max, length);
console.log(`Tablica ${length} losowych liczb całkowitych z przedziału ${min}-${max} to: ${randomNumbersArray}`);
*/
//--------------------------------------------------------------------------------