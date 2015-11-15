'use strict';

function InputError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}

InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = 'InputError';


function look(userInput) {
    if (normalizeDirection(userInput) === 'L') {
        return 'a house';
    } else {
        return 'two angry bears';
    }
}


function normalizeDirection(userInput) {
    if (userInput.toLowerCase() === 'left') {
        return 'L';
    } else if (userInput.toLowerCase() === 'right') {
        return 'R';
    } else {
        throw new InputError('Invalid direction: ' + userInput);
    }
}


function runProgram() {
    try {
        console.log('look(left):', look('left'));
        console.log('look(up):', look('up'));
        console.log('look(right):', look('right'));
    } catch (exception) {
        if (exception instanceof InputError) {
            console.log('InputError:', exception.message);
        } else {
            throw exception;
        }
    }
}

runProgram();
