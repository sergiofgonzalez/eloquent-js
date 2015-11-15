'use strict';

var text = 'And then she said: \'What are you implying?\'\n' +
           'and he replied: \'You don\'t know what you\'re doing.\'\n' +
           'I\'ve been hearing the same thing all my life.';

console.log('original text:\n' + text);

var lines = text.split(/\r?\n/);

var quotePattern = /(^|\W)'|'(\W|$)/g;

var result = [];
lines.forEach(function(line) {
    result.push(line.replace(quotePattern, '$1"$2'));
});

printSeparator();
console.log('result:\n');
result.forEach(function(line) {
    console.log(line);
});
printSeparator();

function printSeparator() {
    console.log('==========================================================');
}
