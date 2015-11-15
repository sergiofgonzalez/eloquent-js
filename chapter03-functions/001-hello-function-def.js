'use strict';

var square = function(x) {
    return x * x;
};

console.log('square(5)=', square(5));

var power = function(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};

console.log('power(2, 0)=', power(2, 0));
console.log('power(2, 1)=', power(2, 1));
console.log('power(2, 2)=', power(2, 2));
console.log('power(2, 3)=', power(2, 3));
