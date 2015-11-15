'use strict';

function power(base, exponent) {
    if (exponent === undefined) {
        exponent = 2;
    }

    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

console.log('power(5)=', power(5));
console.log('power(5, 2)=', power(5, 2));
console.log('power(5, 3)=', power(5, 3));
