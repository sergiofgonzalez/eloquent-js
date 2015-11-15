'use strict';

/* string boundary*/
var dateRegex = /^\d+$/;

var match = dateRegex.exec('12345');
console.log('match:', match);

match = dateRegex.exec('12345 is a number');
console.log('match:', match);

printSeparator();

/* word boundary */
console.log('concatenate: 1-anywhere, 2-begin, 3-end, 4-begin/end');
console.log('1:', /cat/.test('concatenate'));
console.log('2:', /\bcat/.test('concatenate'));
console.log('3:', /cat\b/.test('concatenate'));
console.log('4:', /\bcat\b/.test('concatenate'));

printSeparator();

console.log('concat: 1-anywhere, 2-begin, 3-end, 4-begin/end');
console.log('1:', /cat/.test('concat'));
console.log('2:', /\bcat/.test('concat'));
console.log('3:', /cat\b/.test('concat'));
console.log('4:', /\bcat\b/.test('concat'));

printSeparator();

console.log('catenary: 1-anywhere, 2-begin, 3-end, 4-begin/end');
console.log('1:', /cat/.test('catenary'));
console.log('2:', /\bcat/.test('catenary'));
console.log('3:', /cat\b/.test('catenary'));
console.log('4:', /\bcat\b/.test('catenary'));

printSeparator();

console.log('cat-to-cat: 1-anywhere, 2-begin, 3-end, 4-begin/end');
console.log('1:', /cat/.test('cat-to-cat'));
console.log('2:', /\bcat/.test('cat-to-cat'));
console.log('3:', /cat\b/.test('cat-to-cat'));
console.log('4:', /\bcat\b/.test('cat-to-cat'));

printSeparator();




function printSeparator() {
    console.log('=====================================================');
}
