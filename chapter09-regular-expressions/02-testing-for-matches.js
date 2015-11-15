'use strict';

/* testing for non-special character sequences */
console.log(/abc/.test('abcde'));
console.log(/abc/.test('abxde'));
console.log(/abc/.test('abxabcxde'));


/* tesing for character ranges */
printSeparator();
console.log(/[01234567890]/.test('programmed in 2015'));
console.log(/[0-9]/.test('programmed 2015'));

/* testing for character groups */
printSeparator();
console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test('30-01-2003 15:20'));
console.log(new RegExp("\\d\\d-\\d\\d-\\d\\d\\d\\d \\d\\d:\\d\\d").test('22-09-2015 18:07'));

/* combining character groups and ranges */
printSeparator();
console.log(/[\d.]/.test('this is a 9'));
console.log(/[\d.]/.test('this is a dot.'));
console.log(/[\d+]/.test('this does not mean one or more digits+'));

/* inverting a set of characters */
printSeparator();
console.log(/[^01]/.test('1101001011110010110'));
console.log(/[^01]/.test('1102001011110010110'));

/* repeating parts of a parent */
printSeparator();
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));

console.log(/'\d*'/.test("''"));


console.log(/colou?r/.test('color'));
console.log(/colou?r/.test('colour'));

/* mathing a datetime such as 23-09-2015 08:44 */
printSeparator();
console.log(/\d{1,2}-\d{1,2}-\d{2,4} \d{1,2}:\d{1,2}/.test('23-09-2015 08:44'));
console.log(/\d{1,2}-\d{1,2}-\d{2,4} \d{1,2}:\d{2}/.test('5-2-74 8:04'));

/* grouping subexpressions */
printSeparator();
console.log(/boo+(hoo)+/i.test('Booooooohoohoohoo'));



function printSeparator() {
    console.log('===========================================');
}
