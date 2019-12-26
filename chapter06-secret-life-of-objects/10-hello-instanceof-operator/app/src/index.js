'use strict';
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

class SymmetricMatrix extends Matrix {
  // eslint-disable-next-line no-unused-vars  
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x !== y) {
      super.set(y, x, value);
    }
  }
}

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
console.log(new SymmetricMatrix(2) instanceof Matrix);
console.log(new SymmetricMatrix(2) instanceof Array);