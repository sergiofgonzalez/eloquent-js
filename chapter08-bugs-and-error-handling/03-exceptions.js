'use strict';

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
        throw new Error('Invalid direction: ' + userInput);
    }
}

console.log('look(left):', look('left'));
console.log('look(up):', look('up'));
console.log('look(right):', look('right'));
