import { expovariate } from '../src/expovariate';

describe('expovariate', () => {
  
  test('should return non-negative values', () => {
    const samples = Array(1000).fill(0).map(() => expovariate(1));
    for (const sample of samples) {
      expect(sample).toBeGreaterThanOrEqual(0);
    }
  });

  test('should throw for lambda <= 0', () => {
    expect(() => {
      expovariate(-1);
    }).toThrow('Lambda must be > 0');
    
    expect(() => {
      expovariate(0);
    }).toThrow('Lambda must be > 0');
  });

  test('should have a mean close to 1/lambda', () => {
    const lambda = 2;
    const samples = Array(10000).fill(0).map(() => expovariate(lambda));
    const avg = samples.reduce((acc, val) => acc + val, 0) / samples.length;

    expect(avg).toBeCloseTo(1/lambda, 1);
  });

});
