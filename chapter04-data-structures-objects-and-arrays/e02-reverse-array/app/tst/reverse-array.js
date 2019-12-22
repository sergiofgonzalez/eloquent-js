const tap = require('tap');
const { reverseArray, reverseArrayInPlace } = require('../src/lib/reverse-array');

tap.pass('File itself can be executed');

tap.test('array with one elem reversed', assert => {
  const result = reverseArray([1]);
  assert.deepEquals(result, [1]);
  assert.end();
});

tap.test('array with two elems reversed', assert => {
  const result = reverseArray([1, 2]);
  assert.deepEquals(result, [2, 1]);
  assert.end();
});

tap.test('array with three elems reversed', assert => {
  const result = reverseArray([1, 2, 3]);
  assert.deepEquals(result, [3, 2, 1]);
  assert.end();
});

tap.test('reverseArray invocation errors', assert => {
  assert.throws(() => { reverseArray(); });
  assert.throws(() => { reverseArray(1); });  
  assert.throws(() => { reverseArray(`hello`); });  
  assert.end();  
});

tap.test('reverseInPlace with one elem', assert => {
  const arr = [1];
  reverseArrayInPlace(arr);
  assert.deepEquals(arr, [1]);
  assert.end();
});

tap.test('reverseInPlace with two elems', assert => {
  const arr = [1, 2];
  reverseArrayInPlace(arr);
  assert.deepEquals(arr, [2, 1]);
  assert.end();
});

tap.test('reverseInPlace with three elems', assert => {
  const arr = [1, 2, 3];
  reverseArrayInPlace(arr);
  assert.deepEquals(arr, [3, 2, 1]);
  assert.end();
});

tap.test('reverseArray invocation errors', assert => {
  assert.throws(() => { reverseArrayInPlace(); });
  assert.throws(() => { reverseArrayInPlace(1); });  
  assert.throws(() => { reverseArrayInPlace(`hello`); });  
  assert.end();  
});