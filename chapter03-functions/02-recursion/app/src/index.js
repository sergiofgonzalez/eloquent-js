'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

/* Example 1: Power */
function power(base, exponent) {
  if (exponent === 0){
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(`power(2, 3) = ${ power(2, 3) }`);

/* Example 2: Even and Odd */
function evenOrOdd(number) {
  if (number === 0) {
    return 'even';
  } if (number === 1) {
    return 'odd';
  } else {
    return evenOrOdd(number - 2);
  }
}

console.log(`evenOrOdd(123) = ${ evenOrOdd(123) }`);
console.log(`evenOrOdd(500) = ${ evenOrOdd(500) }`);