'use strict';

/**
 * rows hold an array of arrays
 * with each inner array representing a
 * row of cells
 * 
 */


/**
 * uses `reduce` to compute the max height of an array
 * of cells and wraps that in a map to do it for all rows
 */
function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(maxAccumulator, cell) {
            return Math.max(maxAccumulator, cell.minHeight());
        }, 0);    
    });
}

/**
 * builds up an array with one element for every column
 * index. The call to reduce runs over the outer rows array
 * for each index and picks out the width of the widest cell
 * at that index
 */
function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(maxAccumulator, row) {
            return Math.max(maxAccumulator, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join(' ');
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });

        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join('\n');
    }

    return rows.map(drawRow).join('\n');
}

function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function TextCell(text) {
    this.text = text.split('\n');
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function() {
    return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

/* first check: 5x5 checker board */
var rows = [];
for (var i = 0; i < 5; i ++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
        if ((j + i) % 2 === 0) {
            row.push(new TextCell('##'));
        } else {
            row.push(new TextCell('  '));
        }
    }
    rows.push(row);
}

console.log(drawTable(rows));

/* MOUNTAINS table */
console.log('==========================');
var MOUNTAINS = [
    {name: 'Kilimanjaro', height: 5895, country: 'Tanzania'},
    {name: 'Everest', height: 8848, country: 'Nepal'},
    {name: 'Mount Fuji', height: 3776, country: 'Japan'},
    {name: 'Mont Blanc', height: 4808, country: 'Italy/France'},
    {name: 'Vaalserberg', height: 323, country: 'Netherlands'},
    {name: 'Denali', height: 6168, country: 'United States'},
    {name: 'Popocatepetl', height: 5465, country: 'Mexico'}
];

function UnderlinedCell(inner) {
    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1).concat([repeat('-', width)]);
};

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
        return keys.map(function(name) {
            return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));
