/*
    Program that creates a string tha represents
    an 8x8 grid using newline characters to
    separate lines.
    At each position of the grid there is either
    a space or a # character.
    The characters should form a chess board.

    When it works, change the program so that
    the size of the board is a parameter.
*/

// Take 1: hardcoded size = 8
// ... and very verbose!!!

var board = '';
for (var line = 0; line < 8; line++) {
    for (var cell = 0; cell < 8; cell++) {
        if (line % 2 === 0) {
            if (cell % 2 === 0) {
                board += ' ';
            } else {
                board += '#';
            }
        } else {
            if (cell % 2 === 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
    }
    if (line < 7) {
        board += '\n';
    }
}
console.log('board:\n' + board + '\n--');
console.log('\n=============================\n\n');

// Take 2: More succint implementation with hardcoded size

board = '';
for (var row = 0; row < 8; row++) {
    for (var col = 0; col < 8; col++) {
        if ((row + col) % 2 === 0) {
            board += ' ';
        } else {
            board += '#';
        }
    }
    if (row < 7) {
        board += '\n';
    }
}
console.log('board:\n' + board + '\n--');
console.log('\n=============================\n\n');

// Final Take: parameterize the size
var size = 8;

board = '';
for (var row = 0; row < size; row++) {
    for (var col = 0; col < size; col++) {
        if ((row + col) % 2 === 0) {
            board += ' ';
        } else {
            board += '#';
        }
    }
    if (row < size - 1) {
        board += '\n';
    }
}

console.log('board:\n' + board + '\n--');
console.log('\n=============================\n\n');
