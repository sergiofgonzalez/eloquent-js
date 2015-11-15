var dayName = function() {
    'use strict';

    var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return function(number) {
        return names[number];
    };
}();

console.log(dayName(3));
