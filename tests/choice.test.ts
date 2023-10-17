import { choice } from '../src/choice';

describe('choice function', () => {
  
  it('should return a random element from an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = choice(arr);
    expect(arr).toContain(result);
  });

  it('should return a random character from a string', () => {
    const str = 'abcdef';
    const result = choice(str);
    expect(str).toContain(result);
  });

  it('should return a random element from a Set', () => {
    const set = new Set(['apple', 'banana', 'cherry']);
    const result = choice(set);
    expect(set.has(result!)).toBeTruthy();
  });

  it('should throw for an empty array', () => {
    const emptyArr: number[] = [];
    expect(() => choice(emptyArr)).toThrow();
  });

  it('should throw for an empty string', () => {
    expect(() => choice('')).toThrow();
  });

  it('should throw for an empty Set', () => {
    const emptySet = new Set();
    expect(() => choice(emptySet)).toThrow();
  });
});
