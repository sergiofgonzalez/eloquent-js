'use strict';
const util = require('util');

util.inspect.defaultOptions.breakLength = Infinity;
util.inspect.defaultOptions.depth = Infinity;

function towerOfHanoi(disk, fromPeg, toPeg, auxPeg) {
  if (disk === 1) {
    console.log(`Disk ${ disk } from peg ${ fromPeg } to peg ${ toPeg }`);
  } else {
    towerOfHanoi(disk - 1, fromPeg, auxPeg, toPeg);
    console.log(`Disk ${ disk } from ${ fromPeg } to ${ toPeg }`);
    towerOfHanoi(disk - 1, auxPeg, toPeg, fromPeg);
  }
}

towerOfHanoi(4, 'A', 'B', 'C');