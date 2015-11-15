'use strict';

var ancestry = require('./ancestry.json');
console.log('ancestry loaded with ', ancestry.length, 'element(s).');

function getCentury(person) {
    return Math.ceil(person.died / 100);
}

function average(numbers) {
    return numbers
            .reduce(function(accumulator, number) {
                return accumulator + number;
            }, 0) / numbers.length;
}

var agesByCentury = {};
ancestry
    .forEach(function(person) {
        if (!agesByCentury[getCentury(person)]) {
            agesByCentury[getCentury(person)] = [];
        }
        agesByCentury[getCentury(person)].push(person.died - person.born);
    });

for (var prop in agesByCentury) {
    console.log(prop, ':', agesByCentury[prop], '; avg:', average(agesByCentury[prop]));
}

/* groupBy function */
function groupBy(array, groupingFn) {
    var groups = {};
    array
        .forEach(function(item) {
            var groupName = groupingFn(item);
            if (groupName in groups) {
                groups[groupName].push(item);
            } else {
                groups[groupName] = [item];
            }
    });
    return groups;
}

var ancestryBySex = groupBy(ancestry, function(person) {
    if (person.sex === 'm') {
        return 'males';
    } else {
        return 'females';
    }
});
