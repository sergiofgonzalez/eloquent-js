'use strict';

var testNumbers = {
    mustBeTrue:  ['123', '-123', '5e-3', '-5e10', '1E-5', '3.14', '5.', '.25', '-.25', '-3.', '+123', '+5e-3', '+5e+10', '+3.14', '+5.', '3.14e-2', '3.14e2'],
    mustBeFalse: ['- 123', '.', '+-3', '-+3', '5e+-10']
};

var pattern = /^[+-]?(\d+|\d+\.\d*|\d*\.\d+)([Ee][+-]?\d+)?$/;


assertPattern(pattern, testNumbers);

function assertPattern(pattern, testNumbers) {
    var message;
    testNumbers.mustBeTrue.forEach(function(number) {   
        message = 'Testing number: ' + number + ': ';
        if (!pattern.test(number)) {
            message += 'Error';
        } else {
            message += 'OK';
        }
        console.log(message);
    });

    console.log('=============================================================');
    testNumbers.mustBeFalse.forEach(function(number) {
        message = 'Testing number: ' + number + ': ';
        if (pattern.test(number)) {
            message += 'Error';
        } else {
            message += 'OK';
        }
        console.log(message);
    });
}
