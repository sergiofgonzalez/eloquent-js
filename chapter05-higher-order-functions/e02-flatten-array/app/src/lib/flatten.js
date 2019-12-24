'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

function flatten(arrayOfArrays) {
  const result = arrayOfArrays.reduce((accumulator, currentValue) => {
    accumulator = accumulator.concat(currentValue);       
    return accumulator;
  });
  return result;
}

module.exports = flatten;