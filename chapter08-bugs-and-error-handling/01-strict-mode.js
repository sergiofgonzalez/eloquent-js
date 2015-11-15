

/*
 *  counter is not defined
 */
function canYouSpotTheProblem() {
    'use strict';
    for (counter = 0; counter < 10; counter++) {
        console.log('Happy happy');
    }
}


var myObj = {
    name: 'myObj',
    nums: [1, 2, 3, 4],
    someFn: function() {
        this.nums.forEach(function() {
            console.log(this.name);
        });
    },
    someStrictFn: function() {
        'use strict';
        this.nums.forEach(function() {
            console.log(this.name);
        });
    }
};

function fn(arg, arg) {
    console.log('how can this work?');
}

function strictFn(arg, arg) {
    'use strict';
    console.log('Fortunately, this does not work');
}

/*
 * Comment the function and method calls once tested
 */


console.log('====================================');
canYouSpotTheProblem();


console.log('====================================');
myObj.someFn();

console.log('====================================');
myObj.someStrictFn();
