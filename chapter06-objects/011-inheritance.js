'use strict';

function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function TextCell(text) {
    this.textLines = text.split('\n');
}

TextCell.prototype.minHeight = function() {
    return this.textLines.length;
};

TextCell.prototype.minWidth = function() {
    return this.textLines.reduce(function(maxWidthAcc, textLine) {
        return Math.max(maxWidthAcc, textLine.length);
    }, 0); 
};

TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.textLines[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

var textCell = new TextCell('hello, world!!!\n -- Sergio');
console.log('textCell:', textCell);
console.log('textCell.minHeight():', textCell.minHeight());
console.log('textCell.minWidth():', textCell.minWidth());
console.log('textCell.draw(15, 2):', textCell.draw(15, 2));

function RTextCell(text) {
    TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.textLines[i] || '';
        result.push(repeat(' ', width - line.length) + line);
    }
    return result;
};

var numericCell = new RTextCell(String(1234));
console.log('numericCell:', numericCell);
console.log('numericCell.minHeight():', numericCell.minHeight());
console.log('numericCell.minWidth():', numericCell.minWidth());
console.log('numericCell.draw(15, 2):', numericCell.draw(6, 1));



