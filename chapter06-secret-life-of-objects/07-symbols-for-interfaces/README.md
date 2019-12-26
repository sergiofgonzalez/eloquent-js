# 07 &mdash; Symbols for Interfaces
> introduces `Symbol.iterator` (a symbol value defined in the language), the *iterator* interface and illustrates how to create an iterable class.

## Description

*Symbols* are values created with the `Symbol` function. Unlike strings, newly created symbols are unique &mdash; you cannot create the same symbol twice.

JavaScript allows you to define property names as strings or symbols. The fact that are unique, lets you share the same property *name* for different things.

In this example we will see how *symbols* are useful for interfaces. The object given to a *for/of* loop is expected to be iterable. This means it has a method named with the symbol `Symbol.iterator` (a symbol value defined in the JavaScript language). 
When called, that method should return an object that provides a second interface `iterator`. This `iterator` interface has a `next` method that should produce the next value (if there is one), and a `done` property which should be true when there are no more results to produce.
Note that only `Symbol.iterator` is a symbol, while `next` and `done` are plain strings.

We can directly access that interface for our purposes:

```javascript
let iteratorOverString = 'someString'[Symbol.iterator]();
console.log(iteratorOverString.next()); // { value: 's', done: false }
console.log(iteratorOverString.next()); // { value: 'o', done: false }
```

This let us implement an iterable data structure by doing the following:
```javascript
class SomeNonIterableClass {
  ...
}

class IteratorForPreviousClass {
  next() { ... }
}

SomeNonIterableClass.prototype[Symbol.iterator] = function () {
  return new IteratorForPreviousClass(this);
}
```