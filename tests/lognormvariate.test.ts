import { lognormvariate } from '../src/lognormvariate';

describe('lognormvariate', () => {
  it('should throw error for non-positive sigma', () => {
    expect(() => lognormvariate(0, 0)).toThrow('Sigma must be > 0');
    expect(() => lognormvariate(0, -1)).toThrow('Sigma must be > 0');
  });

  it('should approximate correct mean and variance for large sample size', () => {
    const mu = 0.5;
    const sigma = 0.25;
    const samples = new Array(10000).fill(null).map(() => lognormvariate(mu, sigma));

    const sampleMean = samples.reduce((acc, curr) => acc + curr, 0) / samples.length;
    const sampleVariance = samples.reduce((acc, curr) => acc + Math.pow(curr - sampleMean, 2), 0) / (samples.length - 1);

    const expectedMean = Math.exp(mu + 0.5 * sigma * sigma);
    const expectedVariance = (Math.exp(sigma * sigma) - 1) * Math.exp(2 * mu + sigma * sigma);

    expect(sampleMean).toBeCloseTo(expectedMean, 1);
    expect(sampleVariance).toBeCloseTo(expectedVariance, 1);
  });
});
