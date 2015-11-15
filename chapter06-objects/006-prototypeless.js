'use strict';

var map = Object.create(null);
map['Spain'] = 'Madrid';
map['France'] = 'Paris';

console.log('Spain' in map);
console.log('toString' in map);

var otherMap = {};
otherMap['Germany'] = 'Berlin';
otherMap['Portugal'] = 'Lisbon';

console.log('Germany' in otherMap);
console.log('toString' in otherMap);
