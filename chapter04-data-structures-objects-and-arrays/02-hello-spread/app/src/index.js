'use strict';

function max(...numbers) {
  let result = -Infinity;
  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}

console.log(max(1, 5));
console.log(max(4, 1, 9, -2));

const numbers = [4, 1, 9, -2];
console.log(max(numbers)); // this won't work
console.log(max(...numbers));

// The spread operator is also useful for concatenation
const words = [ 'never', 'fully' ];
console.log(['will', ...words, 'understand']);