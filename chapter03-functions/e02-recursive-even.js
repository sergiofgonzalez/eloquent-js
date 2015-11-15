/*
    Define a recursive function isEven which uses the following definition:
        Zero is even
        One is odd
        N is even if N-2 is even.
*/

'use strict';

function isEven(n) {
    function recursiveEven(n) { 
        if (n === 0) {
            return true;
        } else if (n === 1) {
            return false;
        } else {
            return isEven(n - 2);
        }
    }

    if (n < 0) {
        console.log('ERROR: isEven(n) : only accepts zero or positive integers');
    } else {
        return recursiveEven(n);
    }
}

console.log('isEven(1)=', isEven(1));
console.log('isEven(50)=', isEven(50));
console.log('isEven(75)=', isEven(75));
console.log('isEven(-1)=', isEven(-1));
