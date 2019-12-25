'use strict';

class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${ this.type } rabbit says: '${ line }`);
  }
}

const sampleRabbit = new Rabbit('sample');

console.log(String(sampleRabbit));

Rabbit.prototype.toString = function() {
  return `a ${ this.type } rabbit`;
};

console.log(String(sampleRabbit));

// this can also be done in the class definition itself
class ModernRabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${ this.type } rabbit says: '${ line }`);
  }

  toString() {
    return `a ${ this.type } modern rabbit`;
  }
}

const modernWhiteRabbit = new ModernRabbit('white');
console.log(String(modernWhiteRabbit));
