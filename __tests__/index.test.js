import test from 'node:test';
import assert from 'assert/strict';

import {
  isEmpty,
  isEmptyDeep,
  without,
  intersection,
  intersectionDeep,
} from '../index.js';

test('step1', () => {
  assert.strictEqual(isEmpty({ a: true, b: false }), false);
  assert.strictEqual(isEmpty({ a: undefined, b: false }), false);
  assert.strictEqual(isEmpty({ a: undefined }), true);
  assert.strictEqual(isEmpty({}), true);
});
test('step2', () => {
  assert.ok(without({ a: 1, b: 2, c: 3 }, 'b', 'c'), { a: 1 });
  assert.ok(without({ a: 1, b: 2, c: 3 }, 'a'), { b: 2, c: 3 });
});
test('step3', () => {
  assert.strictEqual(isEmptyDeep({ a: { b: undefined } }), true);
  assert.strictEqual(isEmptyDeep({ a: { b: 1 } }), false);
});
test('step4', () => {
  assert.ok(intersection({ a: 1, b: 2 }, { c: 1, b: 2 }), { b: 2 });
  assert.ok(intersection({ a: 1, b: 2, c: 1 }, { c: 1, b: 2 }), { c: 1, b: 2 });
});
test('step5', () => {
  assert.ok(
    intersectionDeep(
      { a: 1, b: { c: 3, d: { e: 5 } } },
      { c: 1, b: { c: 3, d: { e: 5 } } },
    ),
    { b: { c: 3 }, d: { e: 5 } },
  );
  assert.ok(intersectionDeep({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }), {
    b: { c: 3 },
  });
});
