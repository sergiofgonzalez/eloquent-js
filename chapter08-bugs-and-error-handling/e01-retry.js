'use strict';

function MultiplicatorUnitFailure(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);


function primitiveMultiply(num1, num2) {
    var rand = Math.random();
    if (rand < 0.1) {
        return num1 * num2;
    } else {
        throw new MultiplicatorUnitFailure('Multiplication of ' + num1 + ' * ' + num2 + ' has failed.');
    }

    return num1 * num2;
}


function safeMultiply(num1, num2) {
    while (true) {
        try {
            return primitiveMultiply(num1, num2);
        } catch (exception) {
            if (exception instanceof MultiplicatorUnitFailure) {
                console.log('retrying....');
            } else {
                throw exception;
            }
        }
    }
}

console.log('safeMultiply(5, 8)=', safeMultiply(5, 8));
