'use strict';

var box = {
    locked: true,
    unlock: function() {
        this.locked = false;
    },
    lock: function() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) {
            throw new Error('Cannot access box while it is locked');
        }
        return this._content;
    },
    toString: function() {
        return '{ locked: ' + this.locked + ', content: ' + this._content + ' }';
    }
};

function withBoxUnlocked(fn) {
    box.unlock();
    try {
        fn();
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function() {
    for (var i = 0; i < 5; i++) {
        box.content.push(i);
    }
});


console.log(box.toString());

try {
withBoxUnlocked(function() {
    throw new Error('fabricated error');
});
} catch (error) {
    console.log(error.message, 'has been swallowed');
}

console.log(box.toString());
