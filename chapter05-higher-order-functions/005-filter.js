'use strict';

var ancestry = require('./ancestry.json');
console.log('ancestry file loaded with', ancestry.length, 'element(s).');

function filter(array, test) {
    var passed = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            passed.push(array[i]);
        }
    }
    return passed;
}

/* obtain people who were born between 1900 and 1925 */
var peopleFrom1900to1925 = filter(ancestry, function(person) {
    return person.born >= 1900 && person.born <= 1925;
});

peopleFrom1900to1925.forEach(function (person) {
    var str = person.name + ', born on ' + person.born;
    console.log(str);
});

/* using the array standard method */
ancestry.filter(function(person) {
    return person.born >= 1900 && person.born <= 1925;
}).forEach(function(person) {
    console.log(person.name, ', born on ', person.born);
});
