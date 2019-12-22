const tap = require('tap');
const sum = require('../src/lib/sum');

tap.pass('File itself can be executed');

tap.test('array with one elem returns that element', assert => {
  const result = sum([1]);
  assert.equals(result, 1);
  assert.end();
});

tap.test('array with two elems returns item1 + item2', assert => {
  const result = sum([1, 2]);
  assert.equals(result, 3);
  assert.end();  
});

tap.test('array with three elems returns item1 + item2 + item3', assert => {
  const result = sum([1, 2, 3]);
  assert.equals(result, 6);
  assert.end();  
});

tap.test('array with two doubles returns item1 + item2', assert => {
  const result = sum([1.1, 2.2]);
  assert.equals(result, 1.1 + 2.2);
  assert.end();  
});

tap.test('calling without argument fails', assert => {
  assert.throws(() => { sum(); }, new Error('"value" is required'));
  assert.end();  
});

tap.test('calling with array of non-number fails', assert => {
  assert.throws(() => { sum(['hello']); });
  assert.end();    
});