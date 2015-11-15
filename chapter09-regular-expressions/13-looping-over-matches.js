'use strict';

var input = 'A string with 3 numbers in it... 42 and 88.';

var numberPattern = /\b(\d+)\b/g;
var match;
while (match = numberPattern.exec(input)) {
    console.log('Found:', match[1], 'at', match.index, '(lastIndex: ' + numberPattern.lastIndex + ')');
}
