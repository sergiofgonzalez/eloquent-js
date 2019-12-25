# 04 &mdash; Hello Maps
> illustrates why using plain objects as maps is a bad idea, and how this can be mitigated by either creating these objects through `Object.create(null)`, using `hasOwnProperty` or using the `Map` class (recommended)

## Description

A map is a data structure that associates values (keys) with other values.

Using plain objects as maps in JavaScript is typically dangerous, because those objects inherit properties from `Object.prototype`:

```javascript
const familyAges = {
  adri: 11,
  inma: 50,
  sergio: 46
};

console.log(`sergio's age: ${ familyAges['sergio'] }`); // OK
console.log(`is alex's age known: ${ 'alex' in familyAges }`); // OK
console.log(`is toString's age known: ${ 'toString' in familyAges }`); // wait... what?
```

One way to solve it, is to use `Object.create(null)` to create an object that does not derive from `Object.prototype`:
```javascript
const ages = Object.create(null);
ages.adri = 11;
ages.inma = 50;
ages.sergio = 46;
console.log(`sergio's age: ${ ages['sergio'] }`); // OK
console.log(`is alex's age known: ${ 'alex' in ages }`); // OK
console.log(`is toString's age known: ${ 'toString' in ages }`); // OK

```

Alternatively, you can use `Object.prototype.hasOwnProperty`. Note, that it is not recommended to directly use `hasOwnProperty` through the target object:

```javascript
// No longer recommended: eslint complains!
console.log(`is inma's age known: ${ familyAges.hasOwnProperty('inma')}`);

// Proper way is through call
console.log(`is alex's age known: ${ Object.prototype.hasOwnProperty.call(familyAges, 'alex')}`);
```

In modern, JavaScript it is encouraged to use the `Map` class instead of plain objects to be used as maps.

```javascript
const agesMap = new Map();
agesMap.set('sergio', 46);
agesMap.set('inma', 50);
agesMap.set('adri', 11);

console.log(`sergio's age: ${ agesMap.get('sergio') }`);
console.log(`alex's age is known: ${ agesMap.has('alex') }`);
console.log(`toString's age is known: ${ agesMap.has('toString') }`);
```