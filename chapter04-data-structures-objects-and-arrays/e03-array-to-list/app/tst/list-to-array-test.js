const tap = require('tap');
const { listToArray } = require('../src/lib/list');

tap.pass('File itself can be executed');

tap.test('with empty list', assert => {
  const result = listToArray({});
  assert.deepEquals(result, []);
  assert.end();
});

tap.test('with one elem list', assert => {
  const result = listToArray({value: 1, rest: null});
  assert.deepEquals(result, [1]);
  assert.end();
});

tap.test('with two elems list', assert => {
  const result = listToArray({ value: 1, rest: { value: 2, rest: null } });
  assert.deepEquals(result, [1, 2]);
  assert.end();
});

tap.test('with three elems list', assert => {
  const result = listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } });
  assert.deepEquals(result, [1, 2, 3]);
  assert.end();
});

tap.test('invalid arguments', assert => {
  assert.throws(() => { listToArray(`not list`); });
  assert.throws(() => { listToArray(1); });  
  assert.throws(() => { listToArray([]); });
  assert.throws(() => { listToArray(null); });  
  assert.throws(() => { listToArray(undefined); });
  assert.end();  
});