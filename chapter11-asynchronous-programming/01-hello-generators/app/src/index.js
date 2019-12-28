'use strict';

function* powers(n) {
  for (let current = n;; current *= n)
    yield current;
}

/* invoking powers() returns an iterator */
console.log(powers(3).next().value);
console.log(powers(3).next().value);
console.log(powers(3).next());

for (let result of powers(3)) {
  console.log(`powers(3): ${ result }`);
  if (result > 100)
    break;
}

const powersIterator = powers(2);
for (let i = 0; i < 4; i++) {
  console.log(`powersIterator: `, powersIterator.next());
}

console.log(powers(2).next());

/* 
  in general, generators provide a much more 
  effective way to create iterators for classes
*/
class Matrix {
  // eslint-disable-next-line no-unused-vars  
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  
  get(x, y) {
    return this.content[y * this.width + x];
  }
  
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

Matrix.prototype[Symbol.iterator] = function* () {
  for (let y = 0; y < this.height; y++) {
    for (let x = 0; x < this.width; x++) {
      yield this.get(x, y);
    }
  }
};

const matrix = new Matrix(2, 2, (x, y) => `value for ${x}, ${y}`);
for (let matrixElem of matrix) {
  console.log(matrixElem);
}
