'use strict';

/* reverse */
var numbers = [1, 3,  5, 7, 11, 13];
console.log('numbers.reverse():', numbers.reverse());
console.log('numbers:', numbers);

function reverseArray(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.unshift(array[i]);
    }
    return result;
}

console.log('==============================================');
console.log('numbers:', numbers);
console.log('reverseArray(numbers):', reverseArray(numbers));

function reverseArrayInPlace(array) {
    var maxIndex = array.length / 2;
    for (var i = 0, j = array.length - 1; i < maxIndex; i++, j--) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

console.log('==============================================');
console.log('numbers:', numbers);
reverseArrayInPlace(numbers);
console.log('numbers (after reverseArrayInPlace(numbers)):', numbers);

// testing with an odd number of elements
var numbers2 = [1, 2, 3, 4, 5];
console.log('numbers2:', numbers2);
reverseArrayInPlace(numbers2);
console.log('numbers2 (after reverseArrayInPlace(numbers2)):', numbers2);

/* recursive implementation */
function reverseArray2(array) {
    var result = [];
    function reverse(index) {
        if (index < array.length) {
            reverse(index + 1);
            result.push(array[index]);
        }
    }
    reverse(0);
    return result;
}

function reverseArrayInPlace2(array) {
    function reverse(index) {
        if (array.length > 1) {
            var temp = array.shift();
            reverse(index + 1);
            array.push(temp);
        }
    }
    reverse(0);
}

console.log('==============================================');
console.log('numbers:', numbers);
console.log('reverseArray2(numbers):', reverseArray2(numbers));

console.log('==============================================');
console.log('numbers:', numbers);
reverseArrayInPlace2(numbers);
console.log('numbers (after reverseArrayInPlace2(numbers)):', numbers);


