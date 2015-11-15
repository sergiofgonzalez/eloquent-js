'use strict';

/* initial checkings */
console.log('typeof 2:', typeof 2);
console.log('typeof "a":', typeof 'a');
console.log('typeof true:', typeof true);
console.log('typeof undefined:', typeof undefined);
console.log('typeof null:', typeof null);
console.log('typeof [1]:', typeof [1]);
console.log('typeof { name: "sergio" }:', typeof {name: 'sergio'});
var fn = function() {};
console.log('typeof fn:', typeof fn);
console.log('=======================================');

var someObj = { a: 1, b: { c: 2, d: 3}};
for (var prop in someObj) {
    console.log('prop:', prop);
}
console.log('=======================================');


function deepEquals(a, b) {
    if (a === b) {
        return true;
    }
    
    if (a === null || typeof a !== 'object' ||
        b === null || typeof b !== 'object') {
        return false;
    }

    var numPropsInA = 0, numPropsInB = 0;

    for (var prop in a) {
        numPropsInA += 1;
    }

    for (prop in b) {
        numPropsInB += 1;
        if (!(prop in a) || !deepEquals(a[prop], b[prop])) {
            return false;
        }
    }
    // if we reached this far, they'll be equal if they have the same
    // number of properties
    return numPropsInA === numPropsInB;
}

/* tests */
console.log('deepEquals(null, null):', deepEquals(null, null));
console.log('deepEquals(null, 5):', deepEquals(null, 5));
console.log('deepEquals(null, {a:1})', deepEquals(null, {a:1}));
console.log('deepEquals(5, 3):', deepEquals(5, 3));
console.log('deepEquals(5, 5):', deepEquals(5, 5));
console.log('deepEquals({a:1}, {a:1}):', deepEquals({a:1}, {a:1}));
console.log('deepEquals({a:1}, {b:1}):', deepEquals({a:1}, {b:1}));
var obj1 = {a:1, b: {c:2, d:3}};
var obj2 = {a:1, b: 2};
var obj3 = {a:1, b: {c:2, d:4}};
var obj4 = {a:1, b: {c:2, d:3}};
var obj5 = {a:1, b: {c:2, d:3, e: 4}};
console.log('obj1:', obj1);
console.log('obj2:', obj2);
console.log('obj3:', obj3);
console.log('obj4:', obj4);
console.log('obj5:', obj5);
console.log('deepEquals(obj1, obj1):', deepEquals(obj1, obj1));
console.log('deepEquals(obj1, obj2):', deepEquals(obj1, obj2));
console.log('deepEquals(obj1, obj3):', deepEquals(obj1, obj3));
console.log('deepEquals(obj1, obj4):', deepEquals(obj1, obj4));
console.log('deepEquals(obj1, obj5):', deepEquals(obj1, obj5));
console.log('deepEquals([], []):', deepEquals([], []));
console.log('deepEquals([1], []):', deepEquals([1], []));
console.log('deepEquals([1], [1]):', deepEquals([1], [1]));
console.log('deepEquals([1, 2], [1, 2]):', deepEquals([1, 2], [1, 2]));
console.log('deepEquals([1, 2], [1, 3]):', deepEquals([1, 2], [1, 3]));
