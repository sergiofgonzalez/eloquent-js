'use strict';

function require(name) {
    var code = new Function('exports', readFile(name));
    var exports = {};
    code(exports);
    return exports;
}

console.log(require('weekDay').name(1));

var weekDay = require('weekDay');
weekDay.number('Wednesday');
