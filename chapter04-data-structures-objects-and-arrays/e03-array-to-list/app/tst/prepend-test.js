const tap = require('tap');
const { prepend } = require('../src/lib/list');

tap.pass('File itself can be executed');

tap.test('with empty list', assert => {
  const result = prepend(1, {});
  assert.deepEquals(result, { value: 1, rest: null });
  assert.end();
});

tap.test('with one elem list', assert => {
  const result = prepend(1, {value: 2, rest: null});
  assert.deepEquals(result, { value: 1, rest: { value: 2, rest: null } });
  assert.end();
});

tap.test('with two elems list', assert => {
  const result = prepend(1, { value: 2, rest: { value: 3, rest: null } });
  assert.deepEquals(result, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } });
  assert.end();
});

tap.test('with three elems array', assert => {
  const result = prepend(1, { value: 2, rest: { value: 3, rest: { value: 4, rest: null } } });
  assert.deepEquals(result, { value: 1, rest: { value: 2, rest: { value: 3, rest: { value: 4, rest: null } } } });
  assert.end();
});

tap.test('invalid args', assert => {
  assert.throws(() => { prepend(1); });
  assert.throws(() => { prepend(null); });  
  assert.throws(() => { prepend(undefined); });
  assert.throws(() => { prepend(1, null); });  
  assert.throws(() => { prepend(1, []); });
  assert.throws(() => { prepend(1, 2); });
  assert.throws(() => { prepend(1, []); });  
  assert.end();  
});