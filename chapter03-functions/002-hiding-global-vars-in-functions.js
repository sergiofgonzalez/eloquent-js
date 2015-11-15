'use strict';

var x = 'outside';

var f1 = function() {
    var x = 'inside f1';
};

f1(); // Does not affect global x
console.log(x);

var f2 = function() {
    x = 'inside f2';
};

f2(); // Now the global x value has changed
console.log(x);
