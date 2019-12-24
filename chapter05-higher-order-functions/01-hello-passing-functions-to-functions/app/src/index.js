'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

/* Non-Extensible at all */
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(`Unit ${ i }`);
  }
}

repeatLog(3);

/* Enable extensibility by allowing a function to be passed */
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// passing a function defined on the spot
repeat(3, i => console.log(`Unit ${ i }`));

// passing a function
repeat(3, console.log);

// It allows for more things than just logging
const items = [];
repeat(3, index => items.push(`Unit ${ index }`));
console.log(`${ util.inspect(items) }`);