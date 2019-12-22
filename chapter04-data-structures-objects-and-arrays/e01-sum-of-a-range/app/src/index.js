'use strict';

const range = require('./lib/range');
const sum = require('./lib/sum');
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

console.log(`range(1, 10) = ${ util.inspect( range(1, 10) )}`);
console.log(`range(9, 0) = ${ util.inspect( range(9, 0) )}`);

console.log(`sum(range(1, 10))=${ sum(range(1, 10)) }`);