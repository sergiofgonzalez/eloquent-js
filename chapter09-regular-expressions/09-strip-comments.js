'use strict';

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, '');
}

var javaScriptCode = 
    '/* the simplest program */\n' +
    'console.log("hello, world!!!");\n' +
    'var x = 5; // initialization\n'+
    'x * 2;// 10\n' +
    '/* this is a\n' +
    '   two line comment */\n' +
    'function sayHello(name) {\n'+
    '    console.log("hello, " + name);\n' +
    '}';

console.log(stripComments(javaScriptCode));
printSeparator();

var code = '1 /* a */ + /* b */ 1';
console.log(stripComments(code));
printSeparator();

function stripCommentsBetter(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '');
}

console.log(stripCommentsBetter(javaScriptCode));
printSeparator();

var code = '1 /* a */ + /* b */ 1';
console.log(stripCommentsBetter(code));
printSeparator();



function printSeparator() {
    console.log('=========================================');
}
