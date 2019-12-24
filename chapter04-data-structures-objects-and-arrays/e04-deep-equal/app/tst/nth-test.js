const tap = require('tap');
const { nth } = require('../src/lib/list');

tap.pass('File itself can be executed');

tap.test('with empty list, first elem', assert => {
  const result = nth({}, 0);
  assert.deepEquals(result, undefined);
  assert.end();
});

tap.test('with empty list, second elem', assert => {
  const result = nth({}, 1);
  assert.deepEquals(result, undefined);
  assert.end();
});

tap.test('with one elem list, first elem', assert => {
  const result = nth({value: 1, rest: null}, 0);
  assert.deepEquals(result, 1);
  assert.end();
});

tap.test('with one elem list, second elem', assert => {
  const result = nth({value: 1, rest: null}, 1);
  assert.deepEquals(result, undefined);
  assert.end();
});

tap.test('with two elems list, first elem', assert => {
  const result = nth({ value: 1, rest: { value: 2, rest: null } }, 0);
  assert.deepEquals(result, 1);
  assert.end();
});

tap.test('with two elems list, second elem', assert => {
  const result = nth({ value: 1, rest: { value: 2, rest: null } }, 1);
  assert.deepEquals(result, 2);
  assert.end();
});

tap.test('with two elems list, third elem', assert => {
  const result = nth({ value: 1, rest: { value: 2, rest: null } }, 2);
  assert.deepEquals(result, undefined);
  assert.end();
});

tap.test('with three elems array, first elem', assert => {
  const result = nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 0);
  assert.deepEquals(result, 1);
  assert.end();
});

tap.test('with three elems array, second elem', assert => {
  const result = nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 1);
  assert.deepEquals(result, 2);
  assert.end();
});

tap.test('with three elems array, third elem', assert => {
  const result = nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 2);
  assert.deepEquals(result, 3);
  assert.end();
});

tap.test('with three elems array, fourth elem', assert => {
  const result = nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 3);
  assert.deepEquals(result, undefined);
  assert.end();
});

tap.test('invalid args', assert => {
  assert.throws(() => { nth(null); });
  assert.throws(() => { nth(1, null); });
  assert.throws(() => { nth(1, []); });
  assert.throws(() => { nth(-1, {}); });
  assert.throws(() => { nth(-1, { value: 1, rest: null }); });
  assert.throws(() => { nth(-1, { value: 1, rest: { value: 2, rest: null } }); });

  assert.end();  
});