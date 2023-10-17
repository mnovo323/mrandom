import { triangular } from '../src/triangular';

describe('triangular function', () => {

  test('should return values within the given range', () => {
    const samples = Array(1000).fill(0).map(() => triangular(10, 20, 15));
    for (const sample of samples) {
      expect(sample).toBeGreaterThanOrEqual(10);
      expect(sample).toBeLessThanOrEqual(20);
    }
  });

  test('should respect the mode', () => {
    const mode = 15;
    const samples = Array(10000).fill(0).map(() => triangular(10, 20, mode));
    const avg = samples.reduce((acc, val) => acc + val, 0) / samples.length;
    expect(Math.abs(avg - mode)).toBeLessThan(0.5);
  });

  test('should throw for low > high', () => {
    expect(() => {
      triangular(20, 10, 15);
    }).toThrow('Invalid arguments. Ensure low <= high.');
  });

  test('should throw if mode is outside the range', () => {
    expect(() => {
      triangular(10, 20, 25);
    }).toThrow('Invalid arguments. Ensure low <= mode <= high.');
  });

});