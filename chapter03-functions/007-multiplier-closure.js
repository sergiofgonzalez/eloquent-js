'use strict';

function multiplier(factor) {
    return function(number) {
        return factor * number;
    };
}


function divider(divisor) {
    return function(dividend) {
        return dividend / divisor;
    };
}

var twice = multiplier(2);

console.log('twice(5)=', twice(5));

var half = divider(2);
console.log('half(10)=', half(10));
