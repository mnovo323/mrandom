import { randrange } from '../src/randrange';

describe('randrange function', () => {

  test('should produce values within the valid range', () => {
    const values = Array.from({ length: 1000 }, () => randrange(10));
    for (const value of values) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(10);
    }
  });

  test('should assume start is 0 if only one argument is provided', () => {
    const values = Array.from({ length: 1000 }, () => randrange(10));
    for (const value of values) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(10);
    }
  });

  test('should produce values within the valid range with a step', () => {
    const values = Array.from({ length: 1000 }, () => randrange(0, 10, 2));
    for (const value of values) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(10);
      expect(value % 2).toBe(0);
    }
  });

  test('should work with negative start', () => {
    const values = Array.from({ length: 1000 }, () => randrange(-10, 0));
    for (const value of values) {
      expect(value).toBeGreaterThanOrEqual(-10);
      expect(value).toBeLessThan(0);
    }
  });

  test('should work with negative start and stop', () => {
    const values = Array.from({ length: 1000 }, () => randrange(-10, -5));
    for (const value of values) {
      expect(value).toBeGreaterThanOrEqual(-10);
      expect(value).toBeLessThan(-5);
    }
  });

  test('should work with negative step', () => {
    const values = Array.from({ length: 1000 }, () => randrange(10, 0, -1));
    for (const value of values) {
      expect(value).toBeGreaterThan(0);
      expect(value).toBeLessThanOrEqual(10);
    }
  });

  test('should throw error if step is zero', () => {
    expect(() => randrange(0, 10, 0)).toThrow();
  });

  test('should throw error on empty range', () => {
    expect(() => randrange(5, 5)).toThrow();
  });

  test('distribution should be uniform', () => {
    const length = 1000000;
    const values = Array.from({ length: length }, () => randrange(10));
    const occurrences = Array(10).fill(0);
    for (const value of values) {
      occurrences[value]++;
    }
    for (let i = 0; i < 10; i++) {
      expect(occurrences[i] / length).toBeCloseTo(.1, 1);
    }
  });
});