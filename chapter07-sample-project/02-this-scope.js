'use strict';


var nums = [1, 2, 3, 4, 5];

/* option 1: use a local variable which is passed to the inner function */
var test1 = {
    prop: 10,
    addPropTo: function(array) {
        var prop = this.prop;
        return array.map(function(elem) {
            return prop + elem;
        });
    }
};

console.log(test1.addPropTo(nums));
printSeparator();

/* option 2: use the self var to refer to this */
var test2 = {
    prop: 10,
    addPropTo: function(array) {
        var self = this;
        return array.map(function(elem) {
            return self.prop + elem;
        });
    }
};

console.log(test2.addPropTo(nums));
printSeparator();

/* option 3: use the bind method that all functions provide and that can receive this */
var test3 = {
    prop: 10,
    addPropTo: function(array) {
        return array.map(function(elem) {
            return this.prop + elem;
        }.bind(this));
    }
};

console.log(test3.addPropTo(nums));
printSeparator();


/* option 4: use the context argument */
var test4 = {
    prop: 10,
    addPropTo: function(array) {
        return array.map(function(elem) {
            return this.prop + elem;
        }, this);
    }
};

console.log(test4.addPropTo(nums));
printSeparator();

function printSeparator() {
    console.log('===================================================');
}
