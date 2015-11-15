'use strict';

var ancestry = require('./ancestry.json');
console.log('ancestry loaded with', ancestry.length, 'element(s)');

function reduce(array, combine, start) {
    var result = start;
    for (var i = 0; i < array.length; i++) {
        result = combine(result, array[i]);
    }
    return result;
}

console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(accumulator, item) {
    return accumulator + item;        
}, 0));


/* using the reduce standard method */

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(accumulator, number) {
    return accumulator + number;    
}, 0));

/**
 * Find the most ancient ancestor
 */

var mostAncientAncestor = ancestry.reduce(function(mostAncientAncestor, person) {
    if (person.born < mostAncientAncestor.born) {
        return person;
    } else {
        return mostAncientAncestor;
    }
});

console.log(mostAncientAncestor.name, 'was born on', mostAncientAncestor.born);
