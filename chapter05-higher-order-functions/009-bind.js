'use strict';

var ancestry = require('./ancestry.json');
console.log('ancestry loaded with', ancestry.length, 'records');

var theSet = ['Carel Haverbeke', 'Maria van Brussel', 'Donald Duck'];
function contains(set, person) {
    return set.indexOf(person.name) !== -1;
}

console.log(ancestry.filter(function(person) {
    return contains(theSet, person);    
}));

/* using bind */
console.log('===========================');
console.log(ancestry.filter(contains.bind(null, theSet)));
