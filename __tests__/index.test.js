import test from 'node:test';
import assert from 'assert/strict';

import { countAverage, alphaOmega, fill, fromPairs, intersection } from '../index.js'

test('task1', () => {
    assert.strictEqual(countAverage([5, 7, 9, 3, 2]), 5.2);
});
test('task2', () => {
    assert.ok(alphaOmega([5, 7, 9, 3, 2]), [5, 2]);
    assert.ok(alphaOmega([4, 7, 9, 3, 2]), [4, 2]);
});
test('task3', () => {
    assert.ok(fill(4, 'someString'), ['someString', 'someString', 'someString', 'someString']);
    assert.ok(fill(2, ['someString']), [['someString'], ['someString']]);
});
test('task4', () => {
    assert.ok(fromPairs([['a', 1], ['b', 2]]), { 'a': 1, 'b': 2 });
    assert.ok(fromPairs([['someString', [2, 3]], ['b', 2]]), { 'someString': [2, 3], 'b': 2 });
});
test('task5', () => {
    assert.ok(intersection([1, 2], [2, 3]), [2]);
    assert.ok(intersection(['b', 'e', 'c'], ['b', 'b', 'e']), ['b', 'e']);
});
