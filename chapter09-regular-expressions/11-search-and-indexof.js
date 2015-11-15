'use strict';

/* indexof */
console.log('murcielago'.indexOf('ie'));
printSeparator();

/* indexof with regex doesn't work */
console.log('murcielago'.indexOf(/ie/));
printSeparator();

/* search works with regex */
console.log('murcielago'.search(/ie/));
printSeparator();

console.log('    paddedWord'.search(/\S/));

function printSeparator() {
    console.log('==================================================');
}
