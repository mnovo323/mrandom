import { gammavariate } from '../src/gammavariate'; 

describe('gammavariate', () => {

  test('should throw an error for non-positive alpha', () => {
    expect(() => gammavariate(-1, 1)).toThrow(Error);
  });

  test('should throw an error for non-positive beta', () => {
    expect(() => gammavariate(1, -1)).toThrow(Error);
  });

  test('output should be within a reasonable range', () => {
    const alpha = 2;
    const beta = 3;
    const result = gammavariate(alpha, beta);
    expect(result).toBeLessThan(100); 
  });

  test('should approximate correct mean and variance for large sample size', () => {
    const alpha = 3;
    const beta = 2;
    const sampleSize = 10000;
    let sum = 0;
    let sumOfSquares = 0;

    for (let i = 0; i < sampleSize; i++) {
      const sample = gammavariate(alpha, beta);
      sum += sample;
      sumOfSquares += sample * sample;
    }

    const sampleMean = sum / sampleSize;
    const sampleVariance = (sumOfSquares / sampleSize) - sampleMean * sampleMean;

    const expectedMean = alpha / beta;
    const expectedVariance = alpha / (beta * beta);

    expect(sampleMean).toBeCloseTo(expectedMean, 1);
    expect(sampleVariance).toBeCloseTo(expectedVariance, 1);
  });
});
