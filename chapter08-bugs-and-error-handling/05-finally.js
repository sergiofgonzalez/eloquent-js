'use strict';

var context = null;

function withContext(newContext, bodyFn) {
    var oldContext = context;
    context = newContext;
    var result = bodyFn();
    context = oldContext;
    return result;
}

context = 'context-before-call';

console.log('====================================================');
console.log('context before call:', context);
console.log(withContext('context-for-function', function() {
    return 'execution-without-problems';
}));
console.log('context after call:', context);

console.log('====================================================');
console.log('context before call:', context);
try {
console.log(withContext('context-for-function', function() {
    throw new Error('fabricated exception');
}));
} catch (exception) {
   console.log('An exception was thrown:', exception.message); 
}
console.log('context after call:', context);

function withContextV2(newContext, bodyFn) {
    var oldContext = context;
    context = newContext;
    try {
        return bodyFn();
    } finally {
        context = oldContext;
    }
}

context = 'context-before-call';
console.log('====================================================');
console.log('context before call:', context);
try {
console.log(withContextV2('context-for-function', function() {
    throw new Error('fabricated exception');
}));
} catch (exception) {
   console.log('An exception was thrown:', exception.message); 
}
console.log('context after call:', context);
