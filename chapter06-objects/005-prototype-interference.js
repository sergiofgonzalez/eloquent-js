'use strict';

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log('The ' + this.type + ' rabbit says: "' + line + '"');
};

Rabbit.prototype.dance = function() {
    console.log('The ' + this.type + ' rabbit dances a jig.');
}

var killerRabbit = new Rabbit('killer');
killerRabbit.dance();

var capitalsMap = {};
function storeCapital(country, capital) {
    capitalsMap[country] = capital;
}

storeCapital('Spain', 'Madrid');
storeCapital('France', 'Paris');

for (var country in capitalsMap) {
    console.log('The capital of', country, 'is', capitalsMap[country]);
}

// We add new properties to the prototype
Object.prototype.newProperty = 'new-property';
for (var country in capitalsMap) {
    console.log('The capital of', country, 'is', capitalsMap[country]);
}

console.log('toString' in capitalsMap);

// We delete the property and redefine it using Object.defineProperty
delete Object.prototype.newProperty;

for (var country in capitalsMap) {
    console.log('The capital of', country, 'is', capitalsMap[country]);
}

Object.defineProperty(Object.prototype, 'newProperty', {enumerable: false, value:'new-property'});

console.log('===========================');
for (var country in capitalsMap) {
    console.log('The capital of', country, 'is', capitalsMap[country]);
}

console.log('newProperty' in capitalsMap);

console.log('toString' in capitalsMap);

console.log(capitalsMap.hasOwnProperty('toString'));
console.log(capitalsMap.hasOwnProperty('Spain'));

for (var country in capitalsMap) {
    if (capitalsMap.hasOwnProperty(country)) {
        console.log('The capital of', country, 'is', capitalsMap[country]);
    }
}
