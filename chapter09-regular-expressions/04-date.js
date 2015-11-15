'use strict';

/* current datetime */
console.log(new Date());
printSeparator();

/* specific date */
console.log(new Date(1974, 1, 5));
console.log(new Date(2008, 4, 17, 23, 59, 0, 123));
printSeparator();

/* internal timestamp */
console.log(new Date(1974, 1, 5).getTime());
console.log(new Date(2008, 4, 17).getTime());
console.log('current:', new Date().getTime());
console.log('Date.now:', Date.now());

/* Date methods */
var d = new Date(2008, 4, 17, 23, 59, 0, 123);
console.log('getFullYear:', d.getFullYear());
console.log('getMonth:', d.getMonth());
console.log('getDay:', d.getDay());
console.log('getHours:', d.getHours());
console.log('getMinutes:', d.getMinutes());
console.log('getSeconds:', d.getSeconds());
console.log('getMilliseconds:', d.getMilliseconds());


function printSeparator() {
    console.log('=================================================');
}
