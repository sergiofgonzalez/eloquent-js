# Chapter 06 &mdash; The Secret Life of Objects
> selected examples and exercises for chapter 6

## Examples and Exercises

### [01-hello-methods-and-this-in-functions](./01-hello-methods-and-this-in-functions/)
Methods in JavaScript. Comprehensive examples on how the `this` works for functions defined with the `function` keyword and the difference with *arrow functions*. It also illustrates the usage of `Function.call` to invoke methods on objects.

### [02-hello-prototypes](./02-hello-prototypes/)
Introduces the concept of prototypes in JavaScript. Gives examples on how to check an object's prototype using `Object.getPrototypeOf` and discusses the primigenial prototype `Object.prototype` and `Function.prototype` and `Array.prototype`. Also, introduces `Object.create` which lets you assign a particular prototype to an object.

### [03-hello-classes](./03-hello-classes/)
introduces the three ways in which JavaScript classes can be defined: creating your own *constructors* which sets an object prototype and properties, the constructor function which allows the use of the `new` keyword and the modern JavaScript classes using the `class` keyword.

### [04-hello-maps](./04-hello-maps/)
illustrates why using plain objects as maps is a bad idea, and how this can be mitigated by either creating these objects through `Object.create(null)`, using `hasOwnProperty` or using the `Map` class (recommended).


### Cheat Sheet
+ Function.call(this, args) &mdash; invokes a method on a given object
+ Object.create(obj) &mdash; creates an object whose prototype is `obj`. Use `Object.create(null)` to create an object that does not derive from any prototype (useful when using plain objects as maps).
+ Object.getPrototypeOf(obj) &mdash; gets the prototype of `obj`. You would typically use comparison to check the prototype as in `Object.getPrototypeOf([]) === Array.prototype` or `Object.getPrototypeOf(killerRabbit) === protoRabbit`.
+ Object.prototype &mdash; the *primigenial* prototype
+ Function.prototype &mdash; the prototype of functions
+ Array.prototype &mdash; the prototype of arrays
+ func.prototype &mdash; a property assigned to functions that holds a plain, empty object that derives from `Object.prototype`. It can be enhanced with new properties or overwritten.
+ Object.prototype.hasOwnProperty.call &mdash; recommended way to use `hasOwnProperty` to check whether an object features a given property because it has been defined in the instance, or acquired through the prototype.