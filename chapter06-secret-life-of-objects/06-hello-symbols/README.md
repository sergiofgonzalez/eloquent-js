# 06 &mdash; Hello Symbols
> introduces the usage of *symbols* in JavaScript and demonstrates how they can be used as properties in objects

## Description

*Symbols* are values created with the `Symbol` function. Unlike strings, newly created symbols are unique &mdash; you cannot create the same symbol twice.

JavaScript allows you to define property names as strings or symbols. The fact that are unique, lets you share the same property *name* for different things.

```javascript
class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${ this.type } rabbit says: '${ line }`);
  }
}

Rabbit.prototype[sym] = 55;

const blackRabbit = new Rabbit('black');
console.log(blackRabbit[sym]); // => 55

/*
  Include symbol properties in object expressions
*/
const stringObject = {
  [toStringSymbol]() {
    return `something something`;
  }
};

console.log(stringObject[toStringSymbol]()); // => something something
```