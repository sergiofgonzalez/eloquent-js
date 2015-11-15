'use strict';

function square(x) {
    return x * x;
}

console.log('square(9)=', square(9));

function example() {
    function a() {} // OK
    if (something) {
        function b() {} // Never do that
    }
}
