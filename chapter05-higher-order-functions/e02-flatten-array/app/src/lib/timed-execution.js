'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

function timedExecution(fn, marker) {
  return (...args) => {
    const startTS = process.hrtime.bigint();
    const result = fn(...args);
    console.log(`${ marker ? marker : '' } execution took ${ process.hrtime.bigint() - startTS } ns`);
    return result;
  };
}

module.exports = timedExecution;