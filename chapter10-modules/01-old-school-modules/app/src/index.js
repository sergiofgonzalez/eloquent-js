'use strict';

/*
  This is what modules looked like before
  modules were properly standardized in JavaScript
*/

const weekDay = function() {
  const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return {
    name(number) { return names[number]; },
    number(name) { return names.indexOf(name); }
  };
}();

console.log(weekDay.number('Sunday'));
console.log(weekDay.name(1));