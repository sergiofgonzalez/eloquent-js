'use strict';

var array = ['zero', 'one', 'two', 'three', 'four', 'five'];

array.forEach(function(element, index) {
    console.log(index + ': ' + element);
});
console.log('=================================');

array.filter(function(_, index) {
    return index % 2 === 0;
}).forEach(function(element, index) {
    console.log(index + ': ' + element);
});
console.log('=================================');

array.map(function(element, index) {
    return index + ': ' + element;
}).forEach(function(element, index) {
    console.log(index + ': ' + element);
});
console.log('=================================');

console.log('result: ', array.reduce(function(accumulator, _, index) {
    return accumulator + index;
}, 0));
