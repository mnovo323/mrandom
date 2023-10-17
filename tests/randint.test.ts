import { randint } from '../src/randint';

describe('randint function', () => {

  test('should produce a number within a specified inclusive range', () => {
    for (let i = 0; i < 1000; i++) {
      const value = randint(1, 10);
      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(10);
    }
  });

  test('boundaries should be inclusive', () => {
    const occurrences = Array(10).fill(0);

    for (let i = 0; i < 10000; i++) {
      const value = randint(1, 10);
      occurrences[value - 1]++;
    }

    for (let i = 0; i < 10; i++) {
      expect(occurrences[i]).toBeGreaterThan(0);
    }
  });
});
