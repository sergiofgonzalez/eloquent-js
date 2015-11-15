'use strict';

function some(array, predicateFn) {
    var done = false;    
    for (var i = 0; i < array.length && !done; i++) {
        if (predicateFn(array[i])) {
            return true;
        } else {
            done = false;
        }
    }
    return false;
}

function every(array, predicateFn) {
    var done = false;
    for (var i = 0; i < array.length && !done; i++) {
        if (predicateFn(array[i])) {
            done = false;
        } else {
            return false;
        }
    }
    return true;
}

function isEven(number) {
    return number % 2 === 0;
}

var isOdd = function(number) {
    return !isEven(number);
};

console.log(every([2, 4, 6], isEven));
console.log(some([2, 4, 6], isOdd)); 
console.log(some([2, 4, 6, 1], isOdd)); 
console.log(every([2, 4, 6, 1], isEven));

/* using standard methods */
console.log('==============================');
console.log([2, 4, 6].every(isEven));
console.log([2, 4, 6].some(isOdd)); 
console.log([2, 4, 6, 1].some(isOdd)); 
console.log([2, 4, 6, 1].every(isEven));
