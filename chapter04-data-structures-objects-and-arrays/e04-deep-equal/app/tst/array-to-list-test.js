const tap = require('tap');
const { arrayToList } = require('../src/lib/list');

tap.pass('File itself can be executed');

tap.test('with empty array', assert => {
  const result = arrayToList([]);
  assert.deepEquals(result, {});
  assert.end();
});

tap.test('with one elem array', assert => {
  const result = arrayToList([1]);
  assert.deepEquals(result, { value: 1, rest: null });
  assert.end();
});

tap.test('with two elems array', assert => {
  const result = arrayToList([1, 2]);
  assert.deepEquals(result, { value: 1, rest: { value: 2, rest: null } });
  assert.end();
});

tap.test('with three elems array', assert => {
  const result = arrayToList([1, 2, 3]);
  assert.deepEquals(result, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } });
  assert.end();
});

tap.test('invalid args', assert => {
  assert.throws(() => { arrayToList(`not an array`); });
  assert.throws(() => { arrayToList(1); });  
  assert.throws(() => { arrayToList({}); });
  assert.throws(() => { arrayToList(null); });  
  assert.throws(() => { arrayToList(undefined); });
  assert.end();  
});