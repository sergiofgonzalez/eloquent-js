'use strict';


var ancestry = require('./ancestry.json');
console.log('ancestry loaded with', ancestry.length, 'element(s)');

/**
 * Compute the average age at which the mothers gave birth
 */

function average(numbers) {
    return numbers
            .reduce(function(accumulator, number) {
                return accumulator + number;
            }, 0) / numbers.length;
}

var ancestryByNameMap = {};
ancestry
    .forEach(function(person) {
        ancestryByNameMap[person.name] = person;
    });

/**
 * First we have to map the ancestry into an array of mother-child age diffs.
 * Then, we have to filter out the nulls.
 * After that, we just have to compute the average.
*/
var ageDiffs = 
    ancestry
        .map(function(child) {
            var mother = ancestryByNameMap[child.mother];
            if (mother) {
                return child.born - mother.born; 
            } else {
                return null;
            }
        })
        .filter(function(ageDiff) {
            if (ageDiff) {
                return ageDiff;
            }
        });

console.log('average age diff between mother and child:', average(ageDiffs));
