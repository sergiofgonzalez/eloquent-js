'use strict';

const { reverseArray, reverseArrayInPlace }= require('./lib/reverse-array');
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

console.log(`reverseArray([1, 2, 3, 4, 5]) = ${ util.inspect( reverseArray( [1, 2, 3, 4, 5] )) }`);

const arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(`reverseArrayInPlace([1, 2, 3, 4, 5]) = ${ arr }`);