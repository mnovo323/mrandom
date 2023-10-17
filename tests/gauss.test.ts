import { gauss } from '../src/gauss';

describe('gauss', () => {
    const sampleSize = 10000;
    const tolerance = 0.05;

    it('should approximate correct mean for large sample size', () => {
        const mu = 3;
        const sigma = 2;
        let sum = 0;
        for (let i = 0; i < sampleSize; i++) {
            sum += gauss(mu, sigma);
        }
        const sampleMean = sum / sampleSize;
        expect(sampleMean).toBeCloseTo(mu, tolerance);
    });

    it('should approximate correct variance for large sample size', () => {
        const mu = 0;
        const sigma = 1.5;
        let sum = 0;
        let sumSq = 0;
        for (let i = 0; i < sampleSize; i++) {
            const g = gauss(mu, sigma);
            sum += g;
            sumSq += g * g;
        }
        const sampleMean = sum / sampleSize;
        const sampleVariance = (sumSq / sampleSize) - sampleMean * sampleMean;
        expect(sampleVariance).toBeCloseTo(sigma * sigma, tolerance);
    });

    it('should throw error for negative sigma', () => {
        expect(() => {
            gauss(0, -1);
        }).toThrowError();
    });
});
