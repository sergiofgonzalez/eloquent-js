'use strict';

var animalCountRegex = /\b\d+ (pig|cow|chicken)s?\b/;

console.log(animalCountRegex.test('15 pigs'));
console.log(animalCountRegex.test('1 chicken'));
console.log(animalCountRegex.test('4 weddings and 0 cows'));
console.log(animalCountRegex.test('1 chicken and a half'));
console.log(animalCountRegex.test('thisVariableHolds2pigsAndSome'));
