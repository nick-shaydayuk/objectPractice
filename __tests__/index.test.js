import test from 'node:test';
import assert from 'assert/strict';

import { isEmpty, isEmptyDeep } from '../index.js';

test('task1', () => {
  assert.strictEqual(isEmpty({a: true, b: false}), false);
  assert.strictEqual(isEmpty({a: undefined, b: false}), false);
  assert.strictEqual(isEmpty({a: undefined}), true);
  assert.strictEqual(isEmpty({}), true);
});
/* test('task2', () => {
  assert.ok(alphaOmega([5, 7, 9, 3, 2]), [5, 2]);
  assert.ok(alphaOmega([4, 7, 9, 3, 2]), [4, 2]);
});
test('task3', () => {
  assert.ok(fill(4, 'someString'), [
    'someString',
    'someString',
    'someString',
    'someString',
  ]);
  assert.ok(fill(2, ['someString']), [['someString'], ['someString']]);
}); */
test('task4', () => {
  assert.strictEqual(isEmptyDeep({ a: { b: undefined } }), true);
  assert.strictEqual(isEmptyDeep({ a: { b: 1 } }), false);
});
/* test('task5', () => {
  assert.ok(intersection([1, 2], [2, 3]), [2]);
  assert.ok(intersection(['b', 'e', 'c'], ['b', 'b', 'e']), ['b', 'e']);
}); */
