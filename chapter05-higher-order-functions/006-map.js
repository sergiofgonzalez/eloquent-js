'use strict';

var ancestry = require('./ancestry.json');
console.log('ancestry has been loaded with', ancestry.length, 'element(s)');

/* custom map function */
function map(array, transform) {
    var result =[];
    for (var i = 0; i < array.length; i++) {
        result.push(transform(array[i]));
    }
    return result;
}

/* Obtain from ancestry an array of person names */
var ancestryNames = map(ancestry, function(person) {
    return person.name;
});
console.log(ancestryNames);

/* using the arrays standard method */

/**
 * Obtain the names of the people who lived to at least 90 years
 */

console.log('People who lived at least 90 years');
ancestry.filter(function(person) {
    return person.died - person.born >= 90;    
}).map(function(oldPerson) {
    return oldPerson.name;
}).forEach(function(oldPersonName){
    console.log(oldPersonName);
});




