import { seed, random, getstate, setstate } from '../src/xoshiro128plus';

describe('xoshiro128plus RNG', () => {

    test('should produce consistent output for a given seed', () => {
        seed(123456);
        const values1 = Array.from({ length: 1000 }, () => random());

        seed(123456);
        const values2 = Array.from({ length: 1000 }, () => random());

        expect(values1).toEqual(values2);
    });
    
    test('should produce values between 0 and 1', () => {
        const values = Array.from({ length: 1000 }, () => random());
        for (const value of values) {
            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThanOrEqual(1);
        }
    });

    test('should produce values that are not all the same', () => {
        const values = Array.from({ length: 1000 }, () => random());
        const uniqueValues = new Set(values);
        expect(uniqueValues.size).toBeGreaterThan(1);
    });

    const NUM_SAMPLES = 100000;

  test('should have a mean close to 0.5', () => {
    let sum = 0;
    for (let i = 0; i < NUM_SAMPLES; i++) {
      sum += random();
    }
    const empiricalMean = sum / NUM_SAMPLES;
    expect(empiricalMean).toBeCloseTo(0.5, 2);
  });

  test('should have a variance close to 1/12', () => {
    let sum = 0;
    let sumOfSquares = 0;

    for (let i = 0; i < NUM_SAMPLES; i++) {
      const rnd = random();
      sum += rnd;
      sumOfSquares += rnd * rnd;
    }

    const empiricalMean = sum / NUM_SAMPLES;
    const empiricalVariance = (sumOfSquares / NUM_SAMPLES) - (empiricalMean * empiricalMean);

    expect(empiricalVariance).toBeCloseTo(1/12, 2);
  });

  test('should produce consistent output for a given state', () => {
    seed(123456);
    const state = getstate();
    const values1 = Array.from({ length: 1000 }, () => random());

    seed(123456);
    setstate(state);
    const values2 = Array.from({ length: 1000 }, () => random());

    expect(values1).toEqual(values2);
  });
});
