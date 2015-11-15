'use strict';

function loggingWrapper(fn) {
    return function() {
        console.log('=======================');
        console.log('about to invoke function with arguments:', arguments);
        var result = fn.apply(null, arguments);
        console.log('function has been called. Return value:', result);
        console.log('=======================');
        return result;
    };
}

var sum5 = function(n) {
    return n + 5;
};

console.log('sum5(10):', sum5(10));

loggingWrapper(sum5)(10);

function sumNumbers(n1, n2, n3) {
    return n1 + n2 + n3;
}

loggingWrapper(sumNumbers)(1, 2, 3);
