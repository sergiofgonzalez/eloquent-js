/*
    Write a function that takes two arguments and returns their minimum
*/

'use strict';

function min(a, b) {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

console.log('min(1, 2)=', min(1, 2));
console.log('min(2, 1)=', min(2, 1));
console.log('min(2, 2)=', min(2, 2));
