'use strict';
const util = require('util');

// Defining an object with properties
const myObject = { name: `coords`, x: 0, y: 1, z: 2 };
console.log(Object.keys(myObject));

// Copying the object properties using `Object.assign`
const someOtherObj = { b: 3, c: 4, message: 'Hello to Jason Isaacs!', inner: { name: 'deeper underground', value: '15'} };
Object.assign(myObject, someOtherObj);
console.log(Object.keys(someOtherObj));

// Modify some properties of the copy
myObject.message = 'enhanced coords';
myObject.b = -1;
myObject.inner.value = 18;

// Check that original object has also been modified
console.log(`myObject = ${ util.inspect(myObject) }`);
console.log(`someOtherObject = ${ util.inspect(someOtherObj) }`);

// Aliasing
const object1 =  { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

console.log(object1 === object2); // => true, they're the same object
console.log(object1 === object3); // => false, they're different objects

object1.value = 15;
console.log(object2.value); // => 15, as they're aliased
