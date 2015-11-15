'use strict';

var num1 = 125;
var num2 = 125;

areEqual(125, 125);
areEqual(num1, num2);
areEqual(num1, num1);


var obj1 = { value : 125 };
var obj2 = { value : 125 };
var obj3 = obj1;

areEqual(obj1, obj2);
areEqual(obj1, obj3);


function areEqual(arg1, arg2) {
    console.log(arg1 + ' === ' + arg2 + ' : ' + (arg1 === arg2));
}
