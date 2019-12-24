'use strict';
const util = require('util');
const timedExecution = require('./lib/timed-execution');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

function powerRecursive(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * powerRecursive(base, exponent - 1);
  }
}

function powerIterative(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log(`powerRecursive(2, 8) = ${ powerRecursive(2, 8) }`);
console.log(`powerIterative(2, 8) = ${ powerIterative(2, 8) }`);

console.log(`powerRecursive(8, 0) = ${ powerRecursive(8, 0) }`);
console.log(`powerIterative(8, 0) = ${ powerIterative(8, 0) }`);

console.log(`powerRecursive(5, 1) = ${ powerRecursive(5, 1) }`);
console.log(`powerIterative(5, 1) = ${ powerIterative(5, 1) }`);


const timedPowerRecursive = timedExecution(powerRecursive, 'powerRecursive');
const timedPowerIterative = timedExecution(powerIterative, 'powerIterative');

console.log(`powerRecursive(2, 8) = ${ timedPowerRecursive(2, 8) }`);
console.log(`powerIterative(2, 8) = ${ timedPowerIterative(2, 8) }`);

console.log(`powerRecursive(8, 0) = ${ timedPowerRecursive(8, 0) }`);
console.log(`powerIterative(8, 0) = ${ timedPowerIterative(8, 0) }`);

console.log(`powerRecursive(5, 1) = ${ timedPowerRecursive(5, 1) }`);
console.log(`powerIterative(5, 1) = ${ timedPowerIterative(5, 1) }`);

