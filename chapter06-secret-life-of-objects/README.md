# Chapter 06 &mdash; The Secret Life of Objects
> selected examples and exercises for chapter 6

## Examples and Exercises

### [01-hello-methods-and-this-in-functions](./01-hello-methods-and-this-in-functions/)
Methods in JavaScript. Comprehensive examples on how the `this` works for functions defined with the `function` keyword and the difference with *arrow functions*. It also illustrates the usage of `Function.call` to invoke methods on objects.


### Cheat Sheet
+ Object.call(this, args) &mdash; invokes a method on a given object
+ Object.create(obj) &mdash; creates an object whose prototype is `obj`
+ Object.getPrototypeOf(obj) &mdash; gets the prototype of `obj`. You would typically use comparison to check the prototype as in `Object.getPrototypeOf([]) === Array.prototype` or `Object.getPrototypeOf(killerRabbit) === protoRabbit`.
+ Object.prototype &mdash; the *primigenial* prototype
+ Function.prototype &mdash; the prototype of functions
+ Array.prototype &mdash; the prototype of arrays