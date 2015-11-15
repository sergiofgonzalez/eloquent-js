'use strict';

var ancestry = require('./ancestry.json');
console.log('ancestry loaded with', ancestry.length, 'element(s)');

/**
 * Find the average age partitioned by sex in the ancestry data set
 */

function age(person) {
    return person.died - person.born;
}

function isMale(person) {
    return person.sex === 'm';
}

function isFemale(person) {
    return person.sex === 'f';
}

function average(numbers) {
    return numbers.reduce(function(accumulator, number) {
                            return accumulator + number;
                            }, 0) / numbers.length;
}

/* average tests */
console.log('average([1, 1]):', average([1, 1]));
console.log('average([1, 0]):', average([1, 0]));
console.log('average([0, 10, 5]):', average([0, 10, 5]));


console.log('Average age of men  :', average(ancestry.filter(isMale).map(age)));
console.log('Average age of women:', average(ancestry.filter(isFemale).map(age)));
