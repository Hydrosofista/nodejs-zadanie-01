
// One number random generator
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random string generator
function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Random numbers Array
function getRandomNumbersArray(min, max, length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(getRandomNumber(min, max));
    }
    return array;
}

module.exports = {
    getRandomNumber,
    getRandomString,
    getRandomNumbersArray
};
