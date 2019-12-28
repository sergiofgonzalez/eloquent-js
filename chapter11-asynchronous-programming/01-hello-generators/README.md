# 01 &mdash; Hello, Generators!
> illustrates generator functions and how they are helpful when creating iterators for non-iterable classes

## Description

JavaScript has a feature called *generator* functions that allow functions to be paused and resumed again.

When you define a function with `function*` it becomes a generator. As such, calling a generator function returns an iterator.

```javascript
unction* powers(n) {
  for (let current = n;; current *= n)
    yield current;
}

console.log(powers(3).next()); // { value: 3, done: false }
```

Note that each time that you invoke the function will result in a new iterator being returned:

```javascript
console.log(powers(3).next().value); // -> 3
console.log(powers(3).next().value); // -> 3
```

So to effectively iterate you either have to use a *for-of* loop or keep track of the iterator:
```javascript
for (let result of powers(3)) {
  console.log(`powers(3): ${ result }`); // -> 3, 9, 27...
}

const powersIterator = powers(2);
for (let i = 0; i < 4; i++) {
  console.log(`powersIterator: `, powersIterator.next()); // -> 2, 4, 8, 16...
}

console.log(powers(2).next()); // -> 2 (new invocation)
```

In general, writing iterators using *generators* is much easier than using regular functions:

```javascript
class SomeClass {

}

SomeClass.prototyp[Symbol.iterator] = function* () {
  ...
  yield value;
}
```

because you're relieved from creating a helper class to keep the state of the iterator.
