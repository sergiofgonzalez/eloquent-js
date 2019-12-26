'use strict';

/* Accessing the iterator interface */
let iteratorOverString = 'someString'[Symbol.iterator]();
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());
console.log(iteratorOverString.next());

/* Implementing an iterable data structur */
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

// Now we implement the iterator that will return
// the position of the element as well as the elem
// themselves

// eslint-disable-next-line
class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y === this.matrix.height) return { done: true };

    const value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };
    this.x++;
    if (this.x === this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

// The Matrix class is not iterable per se
const matrix = new Matrix(2, 2, (x, y) => `value for ${x}, ${y}`);

try {
  for (const matrixElem of matrix) {
    console.log(matrixElem);
  }
} catch (err) {
  console.log(`Err: ${ err.message }`);
}

// but we can make it iterable pretty easily
Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

for (const matrixElem of matrix) {
  console.log(matrixElem);
}