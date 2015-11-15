'use strict';

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log('The ' + this.type + ' rabbit says "' + line + '"');
};

Rabbit.prototype.teeth = 'small';


var killerRabbit = new Rabbit('killer');

console.log(killerRabbit.teeth);

killerRabbit.teeth = 'long, sharp and bloody';

console.log(killerRabbit.teeth);

// see how toString in arrays and functions is different
// from toString in Object.prototype

console.log(Array.prototype.toString === Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1, 2]));
