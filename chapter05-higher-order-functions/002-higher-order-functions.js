'use strict';

function greaterThan(n) {
    return function(num) {
        return num > n;
    };
}

var greaterThan10 = greaterThan(10);

/* greaterThan */
console.log('greaterThan10(5):', greaterThan10(5));
console.log('greaterThan10(15):', greaterThan10(15));

console.log('greaterThan(0)(-1)', greaterThan(0)(-1));
console.log('greaterThan(0)(1)', greaterThan(0)(1));

function noisy(f) {
    return function(arg) {
        console.log('calling with', arg);
        var val = f(arg);
        console.log('called with', arg, '- got', val);
        return val;
    };
}

function sum5(arg) {
    return arg + 5;
}


/* noisy */
console.log('================================');
console.log('noisy(arg + 5):');
noisy(sum5)(2);

console.log('noisy(Boolean)(0):');
noisy(Boolean)(0);

console.log('noisy(Boolean)("hello"):');
noisy(Boolean)('hello');

function unless(test, then) {
    if (!test) {
        then();
    }
}

function repeat(times, body) {
    for (var i = 0; i < times; i++) {
        body(i);
    }
}

/* unless and repeat */
repeat(3, function(n) {
    unless(n % 2, function() {
        console.log(n, 'is even');
    });
});
