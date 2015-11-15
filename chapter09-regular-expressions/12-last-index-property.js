'use strict';

/* helllo, pattern.lastIndex */
var pattern = /y/g;
var match = pattern.exec('xyzzy');
console.log('match:', match);
console.log('pattern.lastIndex:', pattern.lastIndex);
printSeparator();

pattern.lastIndex = 3;
match = pattern.exec('xyzzy');
console.log('match:', match);
console.log('pattern.lastIndex:', pattern.lastIndex);
printSeparator();


/* initial and not found value */
pattern = /a/g;
console.log('pattern.lastIndex:', pattern.lastIndex);

match = pattern.exec('xyzzy');
console.log('match:', match);
console.log('pattern.lastIndex:', pattern.lastIndex);
printSeparator();

/* problems in multiple calls to exec when reusing the regex pattern */
var digit = /\d/g;
console.log(digit.exec('here it is: 1'));
console.log(digit.exec('and : 2'));
printSeparator();


/* match */
console.log('Banana'.match(/an/g));

function printSeparator() {
    console.log('==============================================');
}
