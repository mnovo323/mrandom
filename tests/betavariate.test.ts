import { betavariate } from '../src/betavariate';

describe('betavariate', () => {
  
  test('should return values between 0 and 1', () => {
    const samples = Array(1000).fill(0).map(() => betavariate(0.5, 0.5));
    for (const sample of samples) {
      expect(sample).toBeGreaterThanOrEqual(0);
      expect(sample).toBeLessThanOrEqual(1);
    }
  });

  test('should throw for alpha <= 0', () => {
    expect(() => {
      betavariate(-1, 0.5);
    }).toThrow('alpha and beta must be > 0');
  });

  test('should throw for beta <= 0', () => {
    expect(() => {
      betavariate(0.5, -1);
    }).toThrow('alpha and beta must be > 0');
  });

  test('should not produce NaN values', () => {
    const samples = Array(1000).fill(0).map(() => betavariate(2, 2));
    for (const sample of samples) {
      expect(sample).not.toBeNaN();
    }
  });

});
