'use strict';

var car = {
    plate: '8860CDB',
    make: 'Volkswagen',
    model: 'Golf GTI',
    year: '2002',
    color: 'Blue Indigo'
};

console.log('JSON.stringify(car):', JSON.stringify(car));

var shortAncestryJson = 
    '[{"name": "Emma de Milliano",' +
    ' "sex": "f",' +
    ' "born": 1876,' +
    ' "died": 1956,' +
    ' "father": "Petrus de Milliano",' +
    ' "mother": "Sophia van Damme"},' +
    '{"name": "Carolus Haverbeke",' +
    ' "sex": "m",' +
    ' "born": 1832,' +
    ' "died": 1905,' +
    ' "father": "Carel Haverbeke",' +
    ' "mother": "Marian van Brussel"}]';  

var shortAncestry = JSON.parse(shortAncestryJson);

shortAncestry.forEach(function(item) {
    console.log(item.name);
});

/* Node.js does the JSON.parse on files for us with a simple `require` */
var ANCESTRY_FILE = require('./ancestry.json');
console.log('ANCESTRY_FILE.length:', ANCESTRY_FILE.length);
