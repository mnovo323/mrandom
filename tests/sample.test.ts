import { sample } from '../src/sample';

describe('sample', () => {

    test('should return a list of the correct size', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = sample(arr, 5);
        expect(result.length).toBe(5);
    });

    test('should only contain elements from the population', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = sample(arr, 3);
        for (let elem of result) {
            expect(arr).toContain(elem);
        }
    });

    test('should respect provided counts', () => {
        const arr = ['red', 'blue'];
        const counts = [4, 2];
        const result = sample(arr, 5, counts);
        expect(result.filter(e => e === 'red').length).toBeGreaterThanOrEqual(3);
        expect(result.filter(e => e === 'blue').length).toBeLessThanOrEqual(2);
    });

    test('should throw error when sample size is larger than population', () => {
        const arr = [1, 2, 3];
        expect(() => sample(arr, 5)).toThrowError('Sample larger than population.');
    });
});
