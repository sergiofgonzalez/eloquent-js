'use strict';

const list = require('./lib/list');
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

console.log(`list.arrayToList([10, 20]) = ${ util.inspect(list.arrayToList([10, 20])) }`);
console.log(`listToArray(arrayToList([10, 20, 30])) = ${ util.inspect(list.listToArray(list.arrayToList([10, 20, 30]))) }`);
console.log(`list.prepend(10, list.prepend(20, null)) = ${ util.inspect(list.prepend(10, list.prepend(20, null))) }`);
console.log(`list.nth(arrayToList([10, 20, 30]), 1) = ${ util.inspect(list.nth(list.arrayToList([10, 20, 30]), 1)) }`);