import { randbytes } from '../src/randbytes';

describe('randbytes function', () => {

  test('should return an array of the correct length', () => {
    const length = 100;
    const result = randbytes(length);
    expect(result.length).toBe(length);
  });

  test('should produce values within the valid byte range', () => {
    const bytes = randbytes(1000);
    for (const byte of bytes) {
      expect(byte).toBeGreaterThanOrEqual(0);
      expect(byte).toBeLessThanOrEqual(255);
    }
  });

  test('should produce different arrays for subsequent calls (probabilistic)', () => {
    const bytes1 = randbytes(1000);
    const bytes2 = randbytes(1000);
    let differences = 0;
    for (let i = 0; i < 1000; i++) {
      if (bytes1[i] !== bytes2[i]) differences++;
    }
    expect(differences).toBeGreaterThan(0);
  });

});
