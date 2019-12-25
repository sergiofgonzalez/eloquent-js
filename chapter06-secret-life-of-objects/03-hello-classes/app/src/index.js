'use strict';

/* 
  A constructor ensures:
  + that the prototype of an object is the expected one
  + that the properties of the instance are the expected ones
*/

// this is a *constructor*
const protoRabbit = {
  speak(line) {
    console.log(`The ${ this.type } rabbit says: '${ line }'`);
  }
};

function makeRabbit(type) {
  const rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

const sampleRabbit = makeRabbit('sample');
sampleRabbit.speak(`I'm a sample!`);

/*
  Using new simplifies the tasks of the constructor
  method a lot:
  + right prototype is assigned to the object
  + this is bound to the object being created in the constructor
  + the object is returned
*/
function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log(`The ${ this.type } rabbit says: '${ line }'`);
};

const weirdRabbit = new Rabbit('weird');
weirdRabbit.speak(`I'm a freak, I'm a weirdo`);

/* 
  distinction between `prototype` property and 
  the *prototype* of an object
*/

console.log(`Object.getPrototypeOf(Rabbit) === Function.prototype: ${ Object.getPrototypeOf(Rabbit) === Function.prototype }`);
console.log(`Object.getPrototypeOf(weirdRabbit) === Rabbit.prototype: ${ Object.getPrototypeOf(weirdRabbit) === Rabbit.prototype }`);

/* Introducing class Notations */
class ModernRabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${ this.type } rabbit says: '${ line }`);
  }
}

const killerRabbit = new ModernRabbit('killer');
const blackRabbit = new ModernRabbit('black');

killerRabbit.speak(`I'm a killer`);
blackRabbit.speak(`I'm black`);

console.log(`Object.getPrototypeOf(killerRabbit) === ModernRabbit.prototype: ${ Object.getPrototypeOf(killerRabbit) === ModernRabbit.prototype }`);


/*
  Using class in expressions
*/
const object = new class {
  getWord() {
    return 'hello, word!';
  }
};

console.log(`object.getWord(): ${ object.getWord() }`);

/*
  Overriding derived properties
*/

// we define a property on the class
ModernRabbit.prototype.teeth = 'small';
console.log(`killerRabbit.teeth: ${ killerRabbit.teeth }`);

// we override the property for a given object: now the prototype's property is hidden
killerRabbit.teeth = 'long, sharp, and bloody';
console.log(`killerRabbit.teeth: ${ killerRabbit.teeth }`);

// for the rest of the objects of that class it is still valid
console.log(`blackRabbit.teeth: ${ blackRabbit.teeth }`);

// Overriding is useful in many situations
console.log([1, 2, 3].toString());

Array.prototype.toString = () => `some array`;
console.log([1, 2, 3].toString());