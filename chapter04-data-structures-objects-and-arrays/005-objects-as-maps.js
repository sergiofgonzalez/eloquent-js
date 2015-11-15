'use strict';

var map = {};

map['pizza'] = 0.35;
map['brushed teeth'] = 0.18;

console.log(map['brushed teeth']);

for (var event in map) {
    console.log('event: ' + event + ' has a probability of ' + map[event]);
}
