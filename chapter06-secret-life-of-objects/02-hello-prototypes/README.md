# 02 &mdash; Hello Prototypes
> TBD

## Description

In addition to their set of properties, most objects also have a *prototype*. A *prototype* is another object that is used as a fallback source of properties &mdash; when an object gets a request for a property that it does not have, its prototype will be searched for that property, and if not found, then it will be searched on the prototype's prototype and so on.

You can query what's an object prototype with `Object.getPrototypeOf`, and the the *primigenial* prototype is `Object.prototype`.

```javascript
Object.getPrototypeOf({}); // => Object.prototype
Object.getPrototypeOf(Object.prototype); // => null
```

Many objects don't directly have `Object.prototype` as their prototype, for instance, functions have `Function.prototype` and arrays have `Array.prototype`. Both `Function.prototype` and `Array.prototype` have `Object.prototype` as their prototype:

```javascript
Object.getPrototypeOf(() => null) === Function.prototype; // true
Object.getPrototypeOf(Function.prototype) === Object.prototype; // true

Object.getPrototypeOf([]) === Array.prototype; // true
Object.getPrototypeOf(Array.prototype) === Object.prototype; // true
```

You can use `Object.create` to create an object with a specific prototype.

```javascript
const protoRabbit = {
  speak(line) {
    console.log(`The ${ this.type } rabbit says '${ line }'`);
  }
};

const killerRabbit = Object.create(protoRabbit); // makes killerRabbit prototype protoRabbit
killerRabbit.type = 'killer';
killerRabbit.speak(`I'm a killer rabbit!`); // defined in the prototype

Object.getPrototypeOf(killerRabbit) === protoRabbit; // true
```



