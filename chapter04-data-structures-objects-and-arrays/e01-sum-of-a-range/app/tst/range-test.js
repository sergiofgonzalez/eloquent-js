const tap = require('tap');
const range = require('../src/lib/range');

tap.pass('File itself can be executed');

tap.test('start == end returns start', assert => {
  const result = range(0, 0);
  assert.deepEquals(result, [0]);
  assert.end();
});

tap.test('start == end + 1 returns [start, end]', assert => {
  const result = range(0, 1);
  assert.deepEquals(result, [0, 1]);
  assert.end();  
});

tap.test('start == end + 2 returns [start, start + 1, end]', assert => {
  const result = range(0, 2);
  assert.deepEquals(result, [0, 1, 2]);
  assert.end();  
});

tap.test('start == end - 1 returns [start, end]', assert => {
  const result = range(1, 0);
  assert.deepEquals(result, [1, 0]);
  assert.end();  
});

tap.test('start == end - 1 returns [start, start - 1, end]', assert => {
  const result = range(2, 0);
  assert.deepEquals(result, [2, 1, 0]);
  assert.end();    
});

tap.test('start < end with positive step', assert => {
  const result = range(1, 10, 2);
  assert.deepEquals(result, [1, 3, 5, 7, 9]);
  assert.end();
});

tap.test('start > end with negative step', assert => {
  const result = range(10, 1, -2);
  assert.deepEquals(result, [10, 8, 6, 4, 2]);
  assert.end();
});

tap.test('start < end with negative step throws an error', assert => {
  assert.throws(() => { range(1, 2, -1); });
  assert.end();});

tap.test('start > end with positive step throws error', assert => {
  assert.throws(() => { range(2, 1, 1); });
  assert.end();
});

tap.test('calling without end throws exception', assert => {
  assert.throws(() => { range(0); }, new Error('"end" is required'));
  assert.end();
});

tap.test('calling with non integers throws err', assert => {
  assert.throws(() => { range('zero'); }, new Error('"start" must be a number'));    
  assert.end();
});

tap.test('calling with step zero fails', assert => {
  assert.throws(() => { range(0, 0, 0); });
  assert.throws(() => { range(0, 1, 0); });    
  assert.throws(() => { range(1, 0, 0); });  
  assert.end();
});


