import { uniform } from '../src/uniform';

describe('uniform', () => {

  test('should always return a value between a and b', () => {
    const trials = 1000;
    for (let i = 0; i < trials; i++) {
      const result = uniform(5, 10);
      expect(result).toBeGreaterThanOrEqual(5);
      expect(result).toBeLessThan(10);
    }
  });

  test('should respect boundary conditions', () => {
    expect(uniform(0, 0)).toBe(0);
    expect(uniform(-1, 0)).toBeGreaterThanOrEqual(-1);
    expect(uniform(-1, 0)).toBeLessThan(0);
  });

  test('distribution should appear uniform', () => {
    const bucket = new Array(10).fill(0);
    const trials = 100000;
    
    for (let i = 0; i < trials; i++) {
      const result = uniform(0, 10);
      bucket[Math.floor(result)] += 1;
    }

    for (let i = 0; i < 10; i++) {
      expect(bucket[i] / trials).toBeCloseTo(0.1, 1);
    }
  });
});
