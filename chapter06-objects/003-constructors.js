'use strict';

function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit('killer');
var blackRabbit = new Rabbit('black');

console.log(killerRabbit.type);
console.log(blackRabbit.type);

Rabbit.prototype.speak = function(line) {
    console.log('The ' + this.type + ' rabbit says "' + line + '"');
};

blackRabbit.speak('Hello, world');

console.log(Object.getPrototypeOf(blackRabbit));
