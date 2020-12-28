var json = require('./phrases.json');

const getRandomPhrase = () => {
    return json.beginning[Math.floor(Math.random() * json.beginning.length)] +
        json.middle[Math.floor(Math.random() * json.middle.length)] +
        json.end[Math.floor(Math.random() * json.end.length)];

}

console.log(getRandomPhrase());