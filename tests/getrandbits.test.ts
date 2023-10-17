import { getrandbits } from '../src/getrandbits';

describe('getrandbits', () => {
  it('should return a BigInt', () => {
    const result = getrandbits(10);
    expect(typeof result).toBe('bigint');
  });

  it('should throw for non-positive bit counts', () => {
    expect(() => getrandbits(0)).toThrow();
    expect(() => getrandbits(-5)).toThrow();
  });

  it('should produce values within the expected range', () => {
    for (let i = 1; i < 100; i++) {
      const result = getrandbits(i);
      const maxVal = BigInt(2 ** i) - BigInt(1);
      expect(result).toBeGreaterThanOrEqual(BigInt(0));
      expect(result).toBeLessThanOrEqual(maxVal);
    }
  });
});
