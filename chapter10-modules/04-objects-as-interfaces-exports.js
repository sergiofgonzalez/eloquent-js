
(function(exports) {
    var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    exports.name = function(number) {
        return names[number];
    };

    exports.number = function(name) {
        return names.indexOf(name);
    };
})(this.weekDayObj = {});


var weekDay = this.weekDayObj;

console.log(weekDay.name(1));
console.log(weekDay.number('Monday'));
