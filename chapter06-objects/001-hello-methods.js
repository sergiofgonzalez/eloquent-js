'use strict';

var rabbit = {};
rabbit.speak = function(line) {
    console.log('The rabbit says "' + line + '"');
};

rabbit.speak('Hello, world!!!');

function speak(line) {
    console.log('The ' + this.type + ' rabbit says: "' + line + '"');
}

var whiteRabbit = { type: 'white', speak: speak };
var fatRabbit = { type: 'fat', speak: speak };

whiteRabbit.speak('down the rabbit hole!!!');
fatRabbit.speak('down the rabbit hole!!!');

speak.apply(fatRabbit, ['hello, world']);

speak.call(whiteRabbit, 'hello, world!!!');
