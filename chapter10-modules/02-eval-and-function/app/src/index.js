'use strict';

/* eval */
const x = 1;

function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX('var x = 2; console.log(x)'));
console.log(x);

/* Function constructor */
let plusOne = Function('num', 'return num + 1');
console.log(plusOne(4));