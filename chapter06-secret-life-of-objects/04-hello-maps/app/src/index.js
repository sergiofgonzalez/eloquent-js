'use strict';

/* Using plain objects as maps is dangerous */
const familyAges = {
  adri: 11,
  inma: 50,
  sergio: 46
};

console.log(`sergio's age: ${ familyAges['sergio'] }`);
console.log(`is alex's age known: ${ 'alex' in familyAges }`);
console.log(`is toString's age known: ${ 'toString' in familyAges }`);

// old-school way to solve it is to change the object's prototype,
// so that it doesn't derive from Object.prototype anymore
const ages = Object.create(null);
ages.adri = 11;
ages.inma = 50;
ages.sergio = 46;
console.log(`is alex's age known: ${ 'alex' in ages }`);
console.log(`is toString's age known: ${ 'toString' in ages }`);

// alternatively, you can use `Object.hasOwnProperty` to check
// if the property belongs to the object or either
// it is inherited from the prototype

// eslint-disable-next-line no-prototype-builtins
console.log(`is inma's age known: ${ familyAges.hasOwnProperty('inma')}`);

// apparently, proper way is through call
console.log(`is alex's age known: ${ Object.prototype.hasOwnProperty.call(familyAges, 'alex')}`);
console.log(`is toString's age known: ${ Object.prototype.hasOwnProperty.call(familyAges, 'toString') }`);

/*
  Since a few years ago, you can directly use `Map`
*/
const agesMap = new Map();
agesMap.set('sergio', 46);
agesMap.set('inma', 50);
agesMap.set('adri', 11);

console.log(`sergio's age: ${ agesMap.get('sergio') }`);
console.log(`alex's age is known: ${ agesMap.has('alex') }`);
console.log(`toString's age is known: ${ agesMap.has('toString') }`);