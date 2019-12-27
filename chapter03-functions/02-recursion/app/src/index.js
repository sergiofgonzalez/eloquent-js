'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

/* Example 1: Power */
function power(base, exponent) {
  if (exponent === 0){
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(`power(2, 3) = ${ power(2, 3) }`);

/* Example 2: Even and Odd */
function evenOrOdd(number) {
  if (number === 0) {
    return 'even';
  } if (number === 1) {
    return 'odd';
  } else {
    return evenOrOdd(number - 2);
  }
}

console.log(`evenOrOdd(123) = ${ evenOrOdd(123) }`);
console.log(`evenOrOdd(500) = ${ evenOrOdd(500) }`);

/* Example 3: factorial 
  n! = 1, if n == 0
     = n * (n - 1)!, if n > 0
*/
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(`${i}! = ${ factorial(i) }`);
}

/* Example 4: fibonnacci sequence 
  if n < 3, then 1
     n >= 3, then fib(n-1) + fib(n-2)
*/
function fibonnacci(n) {
  if (n < 3) {
    return 1;
  } else {
    return fibonnacci(n - 1) + fibonnacci(n - 2);
  }
}

for (let i = 0; i < 20; i++) {
  console.log(`fibonacci(${ i }) = ${ fibonnacci( i )}`);
}

/* Example 5: ackermann function 
  a(m, n) = n + 1, if m == 0
          = a(m - 1, 1), if m > 0, n == 0
          = a(m - 1, a(m, n - 1)), if m > 0, n > 0
*/

function ackermann(m, n) {
  if (m === 0) {
    return n + 1;
  } else if (n === 0) {
    return ackermann(m - 1, 1);
  } else {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
}

console.log(`ackermann(2, 2) = ${ ackermann(2, 2) }`);

