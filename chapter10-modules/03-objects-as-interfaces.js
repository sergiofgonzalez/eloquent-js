'use strict';

var weekDay = function() {
    var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return {
        name : function(number) { return names[number]; },
        number : function(name) { return names.indexOf(name); } 
    };
}();

console.log(weekDay.name(0));
console.log(weekDay.number('Sunday'));
