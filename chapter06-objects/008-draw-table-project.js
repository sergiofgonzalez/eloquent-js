'use strict';

/* The data set */
var MOUNTAINS = [
    {name: 'Kilimanjaro', height: 5895, country: 'Tanzania'},
    {name: 'Everest', height: 8848, country: 'Nepal'},
    {name: 'Mount Fuji', height: 3776, country: 'Japan'},
    {name: 'Mont Blanc', height: 4808, country: 'Italy/France'},
    {name: 'Vaalserberg', height: 323, country: 'Netherlands'},
    {name: 'Denali', height: 6168, country: 'United States'},
    {name: 'Popocatepetl', height: 5465, country: 'Mexico'}
];


function dataTableFirstApproach(dataItems) {
    var dataItemKeys = Object.keys(dataItems[0]);
    console.log('dataItemKeys', dataItemKeys);

    var headerCells = dataItemKeys.map(function (dataItemKey) {
        return new TextCell(String(dataItemKey));
    });

    var bodyCells = dataItems.map(function(row) {
        return dataItemKeys.map(function(itemKey) {
            return new TextCell(String(row[itemKey]));
        });
    });

    console.log('bodyCells:', bodyCells);

    var result = [headerCells].concat(bodyCells);
    console.log('result:', result);

    return result;
}

dataTableFirstApproach(MOUNTAINS);


function TextCell(text) {
    this.text = text.split('\n');
}

console.log('TextCell("hello, world"):', new TextCell('hello, world'));
console.log('TextCell("line1\\nline2"):', new TextCell('line1\nline2'));

TextCell.prototype.minHeight = function() {
    return this.text.length;
};

console.log('TextCell("hello, world").minHeight():', new TextCell('hello, world').minHeight());
console.log('TextCell("line1\\nline2").minHeight():', new TextCell('line1\nline2').minHeight());

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function (maxAccumulator, textLine) {
        return Math.max(maxAccumulator, textLine.length);
    }, 0);
};

console.log('TextCell("hello, world").minWidth():', new TextCell('hello, world').minWidth());
console.log('TextCell("line1\\nline2").minWidth():', new TextCell('line1\nline2').minWidth());
console.log('TextCell("first line\\nsecond line").minWidth():', new TextCell('first line\nsecond line').minWidth());


function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

console.log('repeat("*", 3):', repeat('*', 3));


TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var line = 0; line < height ; line++) {
        var lineText = this.text[line] || '';
        result.push(lineText + repeat(' ', width - lineText.length));
    }
    return result;
};

console.log('new TextCell("hello, world").draw(15, 1):', new TextCell('hello, world').draw(15, 1));
console.log('new TextCell("hello, world").draw(15, 3):', new TextCell('hello, world').draw(15, 3));
console.log('TextCell("first line\\nsecond line").draw(15, 2):', new TextCell('first line\nsecond line').draw(15, 2));
console.log('TextCell("first line\\nsecond line").draw(15, 3):', new TextCell('first line\nsecond line').draw(15, 3));

function drawTableFirstApproach(rows) {
    var linesStr = rows.map(function(row) {
        var line = row.map(function(cell) {
            return cell.text;
        }).join(' - ');
        return line;
    }).join('\n');
    return linesStr;
}

var mountainsCells = dataTableFirstApproach(MOUNTAINS);
console.log('mountainsCells:', mountainsCells);

console.log(drawTableFirstApproach(mountainsCells));

function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(heightAccumulator, cell) {
            return Math.max(heightAccumulator, cell.minHeight());
        }, 0);
    });
}


function colWidths(rows) {
    var widthsTable = rows.map(function(row) {
        return row.map(function(cell) {
            return cell.minWidth();
        });
    });
    console.log('widthsTable:', widthsTable);

    var widthsRow = widthsTable.reduce(function(widthsRowAcc, widthsRow) {
        return widthsRow.map(function(cellWidth, cellIndex) {
            return Math.max(cellWidth, widthsRowAcc[cellIndex]);
        });
    });

    return widthsRow;
}

console.log('rowHeights:', rowHeights(mountainsCells));

console.log('colWidths:', colWidths(mountainsCells));

function drawTableSecondApproach(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    var resultStr = rows.map(function(cells, rowIndex) {
        var row = cells.map(function(cell, colIndex) {
            return cell.draw(widths[colIndex], heights[rowIndex]);
        }).join(' ');
        console.log('row[' + rowIndex + ']:', row); 
        return row;
    }).join('\n');

    return resultStr;
}

console.log('drawTableSecondApproach(mountainsCells):\n' + drawTableSecondApproach(mountainsCells));

function UnderlinedCell(inner) {
    this.inner = inner;
}

UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};

UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1).concat(repeat('-', width)); 
};

console.log('new UnderlinedCell(new TextCell("header")).draw(6, 2)', new UnderlinedCell(new TextCell('header')).draw(6, 2));


function dataTable(dataItems) {
    var dataItemKeys = Object.keys(dataItems[0]);
    console.log('dataItemKeys', dataItemKeys);

    var headerCells = dataItemKeys.map(function (dataItemKey) {
        return new UnderlinedCell(new TextCell(String(dataItemKey)));
    });

    var bodyCells = dataItems.map(function(row) {
        return dataItemKeys.map(function(itemKey) {
            return new TextCell(String(row[itemKey]));
        });
    });

    console.log('bodyCells:', bodyCells);

    var result = [headerCells].concat(bodyCells);
    console.log('result:', result);

    return result;
}

console.log(drawTableSecondApproach(dataTable(MOUNTAINS)));

function drawTable(table) {
    var heights = rowHeights(table);
    var widths = colWidths(table);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            console.log('block[' + lineNo + ']:', block[lineNo]);
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

    return table.map(drawRow).join('\n');
}

console.log(drawTable(dataTable(MOUNTAINS)));
