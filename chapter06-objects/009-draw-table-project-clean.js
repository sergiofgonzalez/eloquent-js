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

    var headerCells = dataItemKeys.map(function (dataItemKey) {
        return new TextCell(String(dataItemKey));
    });

    var bodyCells = dataItems.map(function(row) {
        return dataItemKeys.map(function(itemKey) {
            return new TextCell(String(row[itemKey]));
        });
    });

    var result = [headerCells].concat(bodyCells);

    return result;
}

dataTableFirstApproach(MOUNTAINS);


function TextCell(text) {
    this.text = text.split('\n');
}

TextCell.prototype.minHeight = function() {
    return this.text.length;
};

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function (maxAccumulator, textLine) {
        return Math.max(maxAccumulator, textLine.length);
    }, 0);
};

function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}



TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var line = 0; line < height ; line++) {
        var lineText = this.text[line] || '';
        result.push(lineText + repeat(' ', width - lineText.length));
    }
    return result;
};

var mountainsCells = dataTableFirstApproach(MOUNTAINS);


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

    var widthsRow = widthsTable.reduce(function(widthsRowAcc, widthsRow) {
        return widthsRow.map(function(cellWidth, cellIndex) {
            return Math.max(cellWidth, widthsRowAcc[cellIndex]);
        });
    });

    return widthsRow;
}

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


function dataTable(dataItems) {
    var dataItemKeys = Object.keys(dataItems[0]);

    var headerCells = dataItemKeys.map(function (dataItemKey) {
        return new UnderlinedCell(new TextCell(String(dataItemKey)));
    });

    var bodyCells = dataItems.map(function(row) {
        return dataItemKeys.map(function(itemKey) {
            return new TextCell(String(row[itemKey]));
        });
    });


    var result = [headerCells].concat(bodyCells);

    return result;
}


function drawTable(table) {
    var heights = rowHeights(table);
    var widths = colWidths(table);

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

    return table.map(drawRow).join('\n');
}

console.log(drawTable(dataTable(MOUNTAINS)));
