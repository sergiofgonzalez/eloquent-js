'use strict';

var empty = {};
console.log(empty.toString);

console.log(empty.toString());

// Object.getPrototypeOf

console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(isNaN) === Function.prototype);
console.log(Object.getPrototypeOf([]) === Array.prototype);

// Object.create
var protoRabbit = {
    speak : function(line) {
        console.log('The ' + this.type + ' rabbit says: "' + line + "'");
    }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('JS rocks!!!');
