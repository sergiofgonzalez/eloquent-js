'use strict';

var arrayishObj = { 0: 'zero', 1: 'one', length: 2 };
var arrayObj = Array.prototype.slice.call(arrayishObj, 0);
arrayObj.forEach(function(elem) {
    console.log(elem);
}); 
