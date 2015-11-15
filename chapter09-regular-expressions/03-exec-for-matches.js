'use strict';

var match = /\d+/.exec('one two 100');
console.log('match:', match);
console.log('match[0]:', match[0]);
console.log('match.index:', match.index);
console.log('match.input:', match.input);
printSeparator();


match = /\d+/.exec('one two 100 200');
console.log('match:', match);
console.log('match[0]:', match[0]);
console.log('match.index:', match.index);
console.log('match.input:', match.input);
printSeparator();

/* match with String values */
console.log ('one two 100 200'.match(/\d+/));
printSeparator();

/* match with subexpressions */
var quotedString = /'[^']*'/;
console.log(quotedString.exec("she said: 'hello, world!!!' and then left"));

match = quotedString = /'([^']*)'/.exec("she said: 'hello, world!!!' and then left");
console.log('match:', match);
console.log('match[0]:', match[0]);
console.log('match[1]:', match[1]);
console.log('match.length:', match.length);

printSeparator();

/* more matching with subexpressions */
match = /bad(ly)?/.exec('bad education');
console.log('match:', match);

match = /bad(ly)?/.exec('badly executed');
console.log('match:', match);

match = /number=(\d)+/.exec('number=12345');
console.log('match:', match);

printSeparator();

/* using groups to extract components from a string */
var dateRegex = /(\d{2,4})-(\d{1,2})-(\d{1,2})/;
match = dateRegex.exec('2015-09-24');
if (match.length != 4) {
    throw new Error('unrecognized format: expected YYYY-MM-DD');
}

var date = {
    day : match[3],
    month: match[2],
    year : match[1]
};

console.log('date=', date);




function printSeparator() {
    console.log('=========================================================');
}
