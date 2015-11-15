var todoList = [];

todoList.push('eat breakfast');
todoList.push('run for 10 minutes');

console.log(todoList.shift());

todoList.unshift('buy skimmed milk');
console.log(todoList[0]);

console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([1, 2, 3, 2, 1].indexOf(2, 2));
console.log([1, 2, 3, 2, 1].lastIndexOf(1));
console.log([1, 2, 3, 2, 1].indexOf(4));


console.log([1, 2, 3, 4, 5].slice(1, 3));
console.log([1, 2, 3, 4, 5].slice(2));

var result = [1, 2, 3, 4, 5].concat(['a', 'e', 'i', 'o', 'u']);
console.log('result:', result);
