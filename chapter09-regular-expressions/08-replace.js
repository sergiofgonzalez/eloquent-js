'use strict';

/* simple replacement */
console.log('papa'.replace('p', 'm'));
printSeparator();


/* replacing using a regex */
console.log('Borobudur'.replace(/[ou]/, 'a'));
printSeparator();

/* global replace */
console.log('Borobudur'.replace(/[ou]/g, 'a'));
printSeparator();

/* replace referring back to matched groups */
var people = 'Hopper, Grace\n'  +
             'McCarthy, John\n' +
             'Ritchie, Dennis\n';

console.log(people.replace(/([\w]+), ([\w]+)/g, '$2 $1'));
printSeparator();


/* replace passing a function as second param to replace */
var s = 'the cia and the fbi are two government organizations';
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
    console.log('==> function called with:', str);
    return str.toUpperCase();
}));
printSeparator();

var stock = '1 lemon, 2 cabbages and 101 eggs';
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if (amount === 1) {
        unit = unit.slice(0, unit.length - 1);
    } else if (amount === 0) {
        amount = 'no';
    }
    return amount + ' ' + unit;
}

console.log(stock);
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));



function printSeparator() {
    console.log('====================================================');
}
