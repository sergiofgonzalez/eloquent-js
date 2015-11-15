'use strict';

function AssertionFailed(message) {
    this.message = message;
}

AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
    if (!test) {
        throw new AssertionFailed(message);
    }
}



function getLastElement(array) {
    assert(array.length > 0, 'cannot get last element from empty array');
    return array[array.length - 1];
}


console.log('getLastElement([1, 2, 3])=', getLastElement([1, 2, 3]));
console.log('getLastElement([])=', getLastElement([]));
