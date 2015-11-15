'use strict';

/*
 *  intentionally buggy to see the tests fail
 */
 
function Vector(x, y) {
    this.x = x + 1;
    this.y = y;
}

Vector.prototype.plus = function(v) {
    return new Vector(this.x + v.x, this.y + v.y);
};

/*
 * Tests:
 */
function testVector() {
    var v1 = new Vector(10, 20);
    var v2 = new Vector(-10, 5);
    var v3 = v1.plus(v2);

    if (v1.x !== 10) {
        return 'fail: x property';
    }
                                        
    if (v1.y !== 20) {
        return 'fail: y property';
    }
                                                                
    if (v2.x !== -10) {
        return 'fail: negative x property';
    }
    
    if (v3.x !== 0) {
        return 'fail: plus on x';
    }
    
    if (v3.y !== 25) {
        return 'fail: plus on y';
    }

    return 'test: OK';
}

console.log(testVector());
