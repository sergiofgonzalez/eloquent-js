'use strict';

function getDate(str) {
    var dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
    var match = dateRegex.exec(str);
    if (!match || match.length != 4) {
        throw new Error('Unexpected date format. Expected: YYYY-MM-DD, but was ' + str);
    }
    return new Date(match[1], match[2] - 1, match[3]);
}

console.log(getDate('2015-09-25'));

try {
    console.log(getDate('5-2-1974'));
} catch (e) {
    console.log('Error caught:', e.message);
}
