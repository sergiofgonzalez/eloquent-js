'use strict';

function range(start, end) {
    if (arguments.length !== 2) {
        console.log('ERROR: range() requires two arguments: start and end');
        return;
    }
    if (start > end) {
        console.log('ERROR: range() requires end argument to be greater than start');
        return;
    }

    var numbers = [];
    for (var i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}


function sum(numbers) {
    if (arguments.length !== 1) {
        console.log('ERROR: sum() requires a single argument consisting of an array of numbers');
        return;
    }

    if (numbers.length === 0) {
        console.log('ERROR: sum() requires a non-empty array of numbers');
        return;
    }
    
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

/* range */
console.log('range ============================');
console.log('range(1, 5):', range(1, 5));

/* sum */
console.log('sum ==============================');
console.log('sum(range(1, 10)):', sum(range(1, 10)));

function range2(start, end, step) {
    if (step === undefined || step === null) {
        step = 1;
    }

    if ((step > 0 && end < start) || (step < 0 &&  end > start) || step === 0) {
        console.log('ERROR: range(start, end, step) : illegal parameter values');
        return;
    }

    var result = [];
    var i;
    if (step > 0) {
        for (i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}

/* range2 */

console.log('range ============================');
console.log('range2(1, 5):', range2(1, 5));
console.log('range2(1, 10, 2):', range2(1, 10, 2));
console.log('range2(5, 2, -1):', range2(5, 2, -1));


