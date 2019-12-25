# 01 &mdash; Hello Methods and `this` in Functions
> introducing object methods in JavaScript and `this` for regular and arrow functions. Also, `Function.call` is introduced.

## Description

Methods are nothing more than properties that hold function values.

Usually (except for static methods), a method needs to do something with the object it was called on. The binding called `this` automatically points at the object that it was called on.

The approach to methods in JavaScript is quite *unorthodox*, as you can define standalone functions using `this`, that will succeed when called upon objects:

```javascript
function speak(line) {
  console.log(`The ${ this.type } rabbit says '${ line }'`);
}
const whiteRabbit = { type: 'white', speak };

whiteRabbit.speak(`How late it's getting`);
```

And you can even use `Function.call(this, ...args)` to explicitly pass an object to the method, instead of using `Object.method(...args)`:

```javascript
//This is equivalent:
speak.call(whiteRabbit, `I'm a white rabbit`);
whiteRabbit.speak(`I'm a white rabbit`);
```

Each function has its own `this`, whose value depends on the way it is called. Therefore, you cannot refer to the `this` of the wrapping scope in a regular function defined with the `function` keyword.

For example, this fails:
```javascript
function divByFactor() {
  function divItemByFactor(item) {
    return item / this.factor;  // cannot access this for enclosing scope
  }
  return this.items.map(divItemByFactor); // this is ok here
}

console.log(divByFactor.call({ items: [1, 2, 3, 4, 5], factor: 3 }));

```

Arrow functions are different &mdash; they do not bind their own `this` but can see the `this` binding of the scope around them.
For example, the following code references `this` from inside a local function:

```javascript
function divideByFactor() {
  return this.items.map(item => item / this.factor);
}

console.log(divideByFactor.call({ items: [1, 2, 3, 4, 5], factor: 3 }));
```