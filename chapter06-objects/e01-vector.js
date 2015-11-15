'use strict';

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(v) {
    return new Vector(this.x + v.x, this.y + v.y);
};

Vector.prototype.minus = function(v) {
    return new Vector(this.x - v.x, this.y - v.y);
};

Object.defineProperty(Vector.prototype, 'length', {
    get: function() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
});


var v1 = new Vector(1, 1);
console.log('v1:', v1);
console.log('v1.length:', v1.length);

var v2 = new Vector(2, 2);
console.log('v2:', v2);
console.log('v2.length:', v2.length);


var vSum = v1.plus(v2);
console.log('v1 + v2 =', vSum);
console.log('(v1 + v2).length=', vSum.length);

var vMinus = v1.minus(v2);
console.log('v1 - v2 =', vMinus);
console.log('(v1 - v2).length=', vMinus.length);

console.log('==============================');
console.log('new Vector(1, 2).plus(new Vector(2, 3)', new Vector(1, 2).plus(new Vector(2, 3)));
console.log('new Vector(1, 2).minus(new Vector(2, 3)', new Vector(1, 2).minus(new Vector(2, 3)));
console.log('new Vector(3, 4).length:', new Vector(3, 4).length);
