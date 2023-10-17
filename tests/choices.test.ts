import { choices } from '../src/choices';

describe('choices', () => {

  test('should return k elements', () => {
    const result = choices([1, 2, 3, 4, 5], undefined, undefined, 3);
    expect(result.length).toBe(3);
  });

  test('should throw for empty population', () => {
    expect(() => choices([], undefined, undefined, 3)).toThrowError('Population cannot be empty.');
  });

  test('should respect provided weights', () => {
    const population = ['A', 'B', 'C'];
    const weights = [0, 0, 1];
    const result = choices(population, weights, undefined, 100);
    expect(result.every(item => item === 'C')).toBe(true);
  });

  test('should respect provided cumulative weights', () => {
    const population = ['A', 'B', 'C'];
    const cum_weights = [1, 1, 3];
    const result = choices(population, undefined, cum_weights, 100);
    expect(result.filter(item => item === 'C').length).toBeGreaterThan(result.filter(item => item === 'A').length);
  });

  test('should throw if both weights and cum_weights are provided', () => {
    expect(() => choices(['A', 'B', 'C'], [1, 1, 1], [1, 1, 1], 3)).toThrowError('Cannot specify both weights and cum_weights.');
  });

  test('should throw if all weights are zero', () => {
    expect(() => choices(['A', 'B', 'C'], [0, 0, 0], undefined, 3)).toThrowError('All weights are zero.');
  });

  test('should default to equal probability if neither weights nor cum_weights are provided', () => {
    const population = ['A', 'B', 'C'];
    const result = choices(population, undefined, undefined, 10000);
    const aCount = result.filter(item => item === 'A').length;
    const bCount = result.filter(item => item === 'B').length;
    const cCount = result.filter(item => item === 'C').length;
    expect(aCount).toBeCloseTo(bCount, -200);
    expect(aCount).toBeCloseTo(cCount, -200);
  });

});

