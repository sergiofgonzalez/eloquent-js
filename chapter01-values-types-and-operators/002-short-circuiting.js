var a = '';
if (a == true) {
    console.log('a is true: a=', a);
} else {
    console.log('a is false: a=', a);
}

var b = 'this is b';
if (b == true) {
    console.log('b is true: b=', b);
} else {
    console.log('b is false: b=', b);
}

console.log('This is short-circuiting 1: a || b, 2: b || a');
console.log(a || b);
console.log(b || a);
