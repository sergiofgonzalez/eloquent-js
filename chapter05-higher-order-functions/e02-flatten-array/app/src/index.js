'use strict';
const util = require('util');
const timedExecution = require('./lib/timed-execution');
const flatten = require('./lib/flatten');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

const flattenTimed = timedExecution(flatten);

const result = flattenTimed([[1, 2, 3], [4,5], [6]]);
console.log(result);