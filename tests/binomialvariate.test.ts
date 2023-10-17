import { binomialvariate } from '../src/binomialvariate';

describe('binomialvariate', () => {

  test('should always return a value between 0 and n', () => {
      const trials = 1000;
      for (let i = 0; i < trials; i++) {
          const result = binomialvariate(10, 0.5);
          expect(result).toBeGreaterThanOrEqual(0);
          expect(result).toBeLessThanOrEqual(10);
      }
  });

  test('should approximate the expected value for large n', () => {
    const n = 1000;
    const p = 0.5;

    const expectedValue = n * p;
    const variance = n * p * (1 - p);
    const stdDev = Math.sqrt(variance);

    const results: number[] = [];

    for (let i = 0; i < 1000; i++) {
      results.push(binomialvariate(n, p));
    }

    const average = results.reduce((a, b) => a + b, 0) / results.length;

    expect(average).toBeGreaterThanOrEqual(expectedValue - (3 * stdDev));
    expect(average).toBeLessThanOrEqual(expectedValue + (3 * stdDev));
  });

  test('should throw error for invalid p', () => {
      expect(() => binomialvariate(10, -0.1)).toThrowError('Invalid arguments. Ensure 0 <= n and 0 <= p <= 1.');
      expect(() => binomialvariate(10, 1.1)).toThrowError('Invalid arguments. Ensure 0 <= n and 0 <= p <= 1.');
  });

});
