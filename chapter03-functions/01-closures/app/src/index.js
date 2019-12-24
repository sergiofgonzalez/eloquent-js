'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;


/* Example 1: the given argument is kept through the function lifetime */
function wrapValue(n) {
  let local = n;
  return () => local;
}

const wrap1 = wrapValue(1);
const wrap2 = wrapValue(2);

console.log(wrap1()); // -> 1
console.log(wrap2()); // -> 2


/* Example 2: multiplier function */
function multiplier(factor) {
  return number => number * factor;
}

// In function creation we define the factor
// which will be preserved while we have
// references to the function
const twice = multiplier(2);

// The function then can be called with a number
console.log(`twice(5) = ${ twice(5) }`);

/* Example 3: check password */
function checkPassword(savedPassword) {
  return candidatePassword => candidatePassword === savedPassword;
}

const checkPass = checkPassword('secret');

console.log(`checkPass('1234') = ${ checkPass('1234') }`);
console.log(`checkPass('secret') = ${ checkPass('secret') }`);
