/*
    Print all the numbers from 1 to 100 with 2 exceptions:
        + For numbers divisible by 3 print Fizz instead of the number
        + For numbers divisible by 5 and not by 3, print Buzz
        + For numbers divisble by 3 and 5, print FizzBuzz
*/

// Take 1: Print all the numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
    console.log(i);
}
console.log('\n===============================================\n');

// Take 2: Print Fizz for numbers divisible by 3 
//and Buzz for those divisible by 5 and not by 3

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log('FizzBuzz');
        } else {
            console.log('Fizz');
        }
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
console.log('\n===============================================\n');

// Take 3: EloquentJS solution
for (var i = 1; i <= 100; i++) {
    var output = '';
    if (i % 3 === 0) {
        output += 'Fizz';
    }
    if (i % 5 === 0) {
        output += 'Buzz';
    }
    console.log(output || i);
}
