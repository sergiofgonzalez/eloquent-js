/*
    Write a function countBs that takes a string as its only argument and
    returns a number that indicates how many uppercase B are found in the
    string.

    Write a function called countChar similar to the previous one but that
    accepts a second argument that identifies the char to be counted.
    Rewrite countBs using this function.
*/

'use strict';

function countBs(str) {
    if (str === null || str === undefined) {
        console.log('ERROR: cannot count Bs on null or undefined string');
        return;
    }
    var num = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'B') {
            num++;
        }
    }
    return num;
}

// countBs tests
console.log('countBs(null)=', countBs(null));
console.log('countBs(undefined)=', countBs(undefined));
console.log('countBs()=', countBs(''));
console.log('countBs(Hello)=', countBs('Hello'));
console.log('countBs(Hello Bob)=', countBs('Hello Bob'));
console.log('countBs(HELLO, BOB=', countBs('HELLO, BOB'));

function countChars(str, ch) {
    if (str === null || str === undefined) {
        console.log('ERROR: cannot count chars on null or undefined string');
        return;
    }
    if (ch === null || ch === undefined) {
        console.log('ERROR: the character to be counted must be known');
        return;
    }
    var hits = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === ch) {
            hits++;
        }
    }
    return hits;
}

// countChars tests
console.log('======================= countChars =');
console.log('countChars(null, a)=', countChars(null, 'a'));
console.log('countChars(undefined, b)=', countChars(undefined, 'b'));
console.log('countChars(sentence)=', countChars('sentence'));
console.log('countChars(sentence, null)=', countChars('sentence', null));
console.log('countChars()=', countChars('', 'a'));
console.log('countChars(Hello, e)=', countChars('Hello', 'e'));
console.log('countChars(Hello Bob, o)=', countChars('Hello Bob', 'o'));
console.log('countChars(HELLO, BOB=, B)', countChars('HELLO, BOB', 'B'));


function countBsAlt(str) {
    return countChars(str, 'B');
}

// countBsAlt tests
console.log('======================= countBsAlt =');
console.log('countBsAlt(null)=', countBsAlt(null));
console.log('countBsAlt(undefined)=', countBsAlt(undefined));
console.log('countBsAlt()=', countBsAlt(''));
console.log('countBsAlt(Hello)=', countBsAlt('Hello'));
console.log('countBsAlt(Hello Bob)=', countBsAlt('Hello Bob'));
console.log('countBsAlt(HELLO, BOB=', countBsAlt('HELLO, BOB'));
