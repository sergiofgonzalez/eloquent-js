'use strict';

function argumentsCounter() {
    console.log('You have passed ' + arguments.length + (arguments.length ===1?' argument.':' arguments.'));
    for (var i = 0; i < arguments.length; i++) {
        console.log('arguments[' + i + ']: ' + arguments[i]);
    }
}

argumentsCounter();
argumentsCounter('hello');
argumentsCounter('Zelda', 'Link', 'Ganondorf');

console.log('=========================================');

var journal =[];
function addEntry(items) {
    for (var i = 0; i < arguments.length; i++) {
        journal.push(arguments[i]);
    }
}

console.log('journal: ', journal);

addEntry('single-item');
console.log('journal: ', journal);

addEntry('a-couple-of-items-1', 'a-couple-of-items2');
console.log('journal: ', journal);
