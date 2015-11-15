'use strict';

var pile = { 
    elements: ['eggshell', 'orange peel', 'worm'],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.error('the height of the pile cannot be set, only read');
    }
};

console.log('pile.height:', pile.height);
pile.height = 10;
console.log('pile.height:', pile.height);

console.log('==================================');
function TextCell(text) {
    this.text = text.split('\n');
}

TextCell.prototype.minHeight = function() {
    return this.text.length;
};

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(maxAcc, textLine) {
        return Math.max(maxAcc, textLine.length);
    }, 0);
};

var textCell = new TextCell('Hello, world!!!!\n -- Sergio');
console.log('textCell:', textCell);
console.log('textCell.minHeight():', textCell.minHeight());
console.log('textCell.minWidth():', textCell.minWidth());

Object.defineProperty(TextCell.prototype, 'heightProp', {
    get: function() {
        return this.text.length;
    }
});

console.log('textCell.heightProp:', textCell.heightProp);
