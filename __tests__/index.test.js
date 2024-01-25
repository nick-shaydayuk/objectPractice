import { describe, expect, it } from '@jest/globals';
import * as funcs from '../index.js';

describe('task1', () => {
  it('should not be empty', () => {
    expect(funcs.isEmpty({ a: true, b: false })).toBeFalsy();
  });
  it('should not be empty', () => {
    expect(funcs.isEmpty({ a: undefined, b: false })).toBeFalsy();
  });
  it('should be empty', () => {
    expect(funcs.isEmpty({ a: undefined })).toBeTruthy();
  });
  it('should be empty', () => {
    expect(funcs.isEmpty({})).toBeTruthy();
  });
});

describe('task2', () => {
  it('should be without', () => {
    expect(funcs.without({ a: 1, b: 2, c: 3 }, 'b', 'c')).toEqual({ a: 1 });
  });
  it('should be without', () => {
    expect(funcs.without({ a: 1, b: 2, c: 3 }, 'a')).toEqual({ b: 2, c: 3 });
  });
  it('should return undefined', () => {
    expect(funcs.without()).toBeUndefined();
  });
});

describe('task3', () => {
  it('should be thuthy', () => {
    expect(funcs.isEmptyDeep({ a: { b: undefined } })).toBeTruthy();
  });
  it('should not be truthy', () => {
    expect(funcs.isEmptyDeep({ a: { b: 1 } })).toBeFalsy();
  });
  it('should not be truthy', () => {
    expect(
      funcs.isEmptyDeep({
        a: {
          b: undefined,
          c: undefined,
          d: { e: undefined, f: 1, g: undefined },
        },
      }),
    ).toBeFalsy();
  });
});

describe('task4', () => {
  it('should find intersection', () => {
    expect(funcs.intersection({ a: 1, b: 2 }, { c: 1, b: 2 })).toEqual({
      b: 2,
    });
  });
  it('should find intersection', () => {
    expect(funcs.intersection({ a: 1, b: 2, c: 1 }, { c: 1, b: 2 })).toEqual({
      c: 1,
      b: 2,
    });
  });
  it('should not find intersection', () => {
    expect(funcs.intersection({ a: 1, b: 2, c: 1 }, { d: 1, e: 2 })).toEqual(
      {},
    );
  });
  it('should not find intersection', () => {
    expect(funcs.intersection()).toBeUndefined();
  });
});

describe('task5', () => {
  it('should find deep intersection', () => {
    expect(
      funcs.intersectionDeep(
        { a: 1, b: { c: 3, d: { e: 5 } } },
        { c: 1, b: { c: 3, d: { e: 5 } } },
      ),
    ).toEqual({ b: { c: 3, d: { e: 5 } } });
  });
  it('should find deep intersection', () => {
    expect(
      funcs.intersectionDeep({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }),
    ).toEqual({
      b: { c: 3 },
    });
  });
  it('should not find deep intersection', () => {
    expect(
      funcs.intersectionDeep(
        { a: { e: 5 }, b: 2, c: 1 },
        { d: 1, e: { c: 3 } },
      ),
    ).toEqual({});
  });
  it('should not find deep intersection', () => {
    expect(funcs.intersectionDeep()).toBeUndefined();
  });
});
