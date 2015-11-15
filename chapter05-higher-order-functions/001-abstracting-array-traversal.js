'use strict';

var array = [1, 2, 3];

/**
 * Print an array on the console, one element on each line
 */

/* take 1: custom loop */
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/* take 2: define a function so it works for any array */
function logEachElement(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

/* take 2: using higher order functions, so even the action can be parameterized */
function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

console.log('=======================================');
logEachElement(array);

console.log('=======================================');
var fn = function(item) {
    console.log(item);
};
forEach(array, fn);

/* You don't even need to name the function */
console.log('======================================');
forEach(array, console.log);

/* or you could define the function inline */
console.log('======================================');
forEach(array, function(item) {
    console.log(item);
});

/* or you can pass a newly defined function */
console.log('======================================');
function printItem(item) {
    console.log(item);
}

forEach(array, printItem);


/* JavaScript flexibility is awesome: the function does not have to be a Consumer */
console.log('======================================');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
forEach(numbers, function(number) {
    sum += number;
});
console.log('sum=', sum);

