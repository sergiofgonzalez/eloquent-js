'use strict';

console.log('Math.max ===================================');
console.log('Math.max(1, 2)=', Math.max(1, 2));
console.log('Math.max(1, 2, 3, 4, 5)=', Math.max(1, 2, 3, 4, 5));

console.log('Math.sqrt ==================================');
console.log('Math.sqrt(136)=', Math.sqrt(136));

function randomPointOnCircle(radius) {
    var angle = Math.random() * 2 * Math.PI;
    return { x: radius * Math.cos(angle),
            y: radius * Math.sin(angle) };
}

console.log('===========================================');
console.log('randomPointOnCircle(2)=', randomPointOnCircle(2));
console.log('randomPointOnCircle(2)=', randomPointOnCircle(2));

console.log('Math.floor ================================');
console.log('Random number between 0 and 9: ', Math.floor(Math.random() * 10));
console.log('Random number between 0 and 9: ', Math.floor(Math.random() * 10));
