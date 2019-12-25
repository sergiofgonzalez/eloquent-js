'use strict';

const sym = Symbol('name');
console.log(sym === Symbol('name'));

// symbols can be used as properties of objects

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
console.log(blackRabbit[sym]);

/*
  A more useful example
*/
const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function () {
  return `length of the array: ${ this.length }`;
};

console.log([1, 2][toStringSymbol]());

/*
  Include symbol properties in object expressions
*/
const stringObject = {
  [toStringSymbol]() {
    return `something something`;
  }
};

console.log(stringObject[toStringSymbol]());