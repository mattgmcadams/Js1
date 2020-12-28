var json = require('./phrases.json');

const getRandomPhrase = () => {
    const b = json.beginning[Math.floor(Math.random() * json.beginning.length)];
    const m = json.middle[Math.floor(Math.random() * json.middle.length)];
    const e = json.end[Math.floor(Math.random() * json.end.length)];

    return b + m + e;
}

console.log(getRandomPhrase());