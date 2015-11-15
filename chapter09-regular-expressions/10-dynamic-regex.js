'use strict';


/* normal username */
var username = 'sergio';

var text = username + ' is a suspicious character.';

var regex = new RegExp('\\b(' + username + ')\\b', 'gi');
console.log(text.replace(regex, '*$1*'));
printSeparator();


/* without escaping */
username = 'dea+hl[]rd';
text = username + ' is a suspicious character.';
regex = new RegExp('\\b(' + username + ')\\b', 'gi');
console.log(text.replace(regex, '*$1*'));
printSeparator();

/* escaping */
username = 'dea+hl[]rd';
var usernameEscaped = username.replace(/[^\w\s]/g, '\\$&');
text = username + ' is a suspicious character.';
regex = new RegExp('\\b(' + usernameEscaped + ')\\b', 'gi');
console.log(text.replace(regex, '*$1*'));
printSeparator();




function printSeparator() {
    console.log('============================================');
}
