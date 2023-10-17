import { shuffle } from '../src/shuffle';

describe('shuffle', () => {
    
    test('should contain all original elements', () => {
        const arr = [1, 2, 3, 4, 5];
        shuffle(arr);
        arr.sort((a, b) => a - b);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
    
    test('should mutate original list', () => {
        const arr = [1, 2, 3, 4, 5];
        const original = [...arr];
        shuffle(arr);
        expect(arr).not.toEqual(original);
    });
});
