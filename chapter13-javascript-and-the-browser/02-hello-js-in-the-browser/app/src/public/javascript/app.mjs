import greeter from './lib/greeter.mjs';

const message = greeter('Jason Isaacs');
console.log(`Message generated: ${ message }`);

alert(message);