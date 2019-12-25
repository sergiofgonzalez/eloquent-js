'use strict';

/* a method is just a property that holds a function value */
const rabbit = {};
rabbit.speak = line => {
  console.log(`The rabbit says '${ line }'`);
};

rabbit.speak(`I'm alive`);


/* You can use `this` to refer to the called upon object */
function speak(line) {
  console.log(`The ${ this.type } rabbit says '${ line }'`);
}
const whiteRabbit = { type: 'white', speak };
const hungryRabbit = { type: 'hungry', speak };

whiteRabbit.speak(`How late it's getting`);
hungryRabbit.speak(`I could eat 1000 carrots now`);

/* or you can use `call()` and explicitly pass a `this` */
speak.call(hungryRabbit, `I'm hungry`);
hungryRabbit.speak(`I'm hungry`);

/* 
  `this` in arrow functions behaves different than `this`
  in methods defined with the `function` keyword.

  Arrow functions can use `this` to refer to the scope around them,
  but there is no this associated to them
  Regular functions have their own `this` binding, but cannot use it
  to refer to the enclosing scope
*/

// Example 1: regular functions have this
function divideAllItemsByTwo() {
  const result = [];
  for (const item of this.items)
    result.push(item / 2);
  return result;
}

console.log(divideAllItemsByTwo.call({ items: [1, 2, 3, 4, 5] }));

// Example 2: arrow functions don't have this
// const divideAllByTwo = () => {
//   const result = [];
//   for (const item of this.items)  // this === {}
//     result.push(item / 2);
//   return result;
// };
//console.log(divideAllByTwo.call({ items: [1, 2, 3, 4, 5] }));

// Example 3: however arrow functions can see the this from the enclosing scope
function divideByFactor() {
  return this.items.map(item => item / this.factor);
}

console.log(divideByFactor.call({ items: [1, 2, 3, 4, 5], factor: 3 }));

// Example 4: which regular functions cannot do
function divByFactor() {
  function divItemByFactor(item) {
    return item / this.factor;  // this is undefined here
  }
  return this.items.map(divItemByFactor);
}

console.log(divByFactor.call({ items: [1, 2, 3, 4, 5], factor: 3 }));


// Another example
function normalize() {
  console.log(this.coords.map(n => n / this.length ));
}

normalize.call({ coords: [0, 2, 3], length: 5 });

