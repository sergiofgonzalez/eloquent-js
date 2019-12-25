'use strict';

/* 
  when an object gets a request for a property it does not have,
  its prototype is searched
*/
const empty = {};
console.log(empty.toString()); // empty does not have a toString method but its prototype does


console.log(`Object.getPrototypeOf({}) === Object.prototype: ${ Object.getPrototypeOf({}) === Object.prototype }`);

/* Object.prototype is the primigenial prototype */
console.log(`Object.getPrototypeOf(Object.prototype): ${ Object.getPrototypeOf(Object.prototype) }`);

/* Functions' prototype is Function.prototype */
console.log(`Object.getPrototypeOf(() => null) === Function.prototype: ${ Object.getPrototypeOf(() => null) === Function.prototype }`);
console.log(`Object.getPrototypeOf(Function.prototype) === Object.prototype: ${ Object.getPrototypeOf(Function.prototype) === Object.prototype }`);

/* Arrays' prototype is Array.prototype */
console.log(`Object.getPrototypeOf([]) === Array.prototype: ${ Object.getPrototypeOf([]) === Array.prototype }`);
console.log(`Object.getPrototypeOf(Array.prototype) === Object.prototype: ${ Object.getPrototypeOf(Array.prototype) === Object.prototype }`);


/* You can create objects with specific prototypes */
const protoRabbit = {
  speak(line) {
    console.log(`The ${ this.type } rabbit says '${ line }'`);
  }
};

const killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak(`I'm a killer rabbit!`); // defined in the prototype

console.log(`Object.getPrototypeOf(killerRabbit): ${ Object.getPrototypeOf(killerRabbit) === protoRabbit }`);
