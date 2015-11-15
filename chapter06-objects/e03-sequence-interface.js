'use strict';

/**
 * Sequence interface:
 * 
 *  + hasNext(): returns a boolean indicating whether there are more elements
 *               in the sequence.
 *
 *  + next()   : returns the next element in the sequence.
 *
 */


function ObjectSequence(obj) {
    this.obj = obj;
    this.properties = Object.keys(obj);
    this.pos = undefined;
}

ObjectSequence.prototype.hasNext = function() {
    if (!this.pos) {
        this.pos = 0;
    }

    return this.pos < this.properties.length;
};

ObjectSequence.prototype.next = function() {
    if (this.pos < this.properties.length) {
        return this.obj[this.properties[this.pos++]];
    } else {
        return;
    }
};

var natoAlphabet = {
    a: 'alpha',
    b: 'bravo',
    c: 'charlie',
    d: 'delta',
    e: 'echo',
    f: 'foxtrot'
};

var natoAlphabetSequence = new ObjectSequence(natoAlphabet);

var value;
while (natoAlphabetSequence.hasNext()) {
    console.log(natoAlphabetSequence.next());
}

function logFive(sequence) {
    for (var i = 0; i < 5 && sequence.hasNext(); i++) {
        console.log(i + ':' + sequence.next());
    }
}

printSeparator();
logFive(new ObjectSequence(natoAlphabet));


printSeparator();
logFive(new ObjectSequence({'1': 'one', '2': 'two', '3': 'three'}));

function ArraySeq(array) {
    this.pos = undefined;
    this.array = array;
};

ArraySeq.prototype.hasNext = function() {
    if (!this.pos) {
        this.pos = 0;
    }
    return this.pos < this.array.length;
};

ArraySeq.prototype.next = function() {
    if (this.pos < this.array.length) {
        return this.array[this.pos++];
    } else {
        return;
    }
};

printSeparator();
logFive(new ArraySeq([1, 2, 3, 4, 5, 6, 7, 8]));

printSeparator();
logFive(new ArraySeq([1, 2, 3]));


function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    this.current = undefined;
}

RangeSeq.prototype.hasNext = function() {
    if (!this.current) {
        this.current = this.from;
    }
    return this.current <= this.to;
};

RangeSeq.prototype.next = function() {
    if (this.current <= this.to) {
        return this.current++;
    } else {
        return;
    }
};

printSeparator();
logFive(new RangeSeq(10, 20));

printSeparator();
logFive(new RangeSeq(10, 13));

function printSeparator() {
    console.log('=========================================');
}
