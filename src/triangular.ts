import { random } from './xoshiro128plus';

function triangular(low: number = 0, high: number = 1, mode?: number): number {
  if (mode === undefined) mode = (low + high) / 2;

  if (low > high) throw new Error('Invalid arguments. Ensure low <= high.');
  if (mode < low || mode > high) {
    throw new Error('Invalid arguments. Ensure low <= mode <= high.');
  }

  const u = random();
  const c = (mode - low) / (high - low);

  if (u <= c) {
    return low + Math.sqrt(u * (high - low) * (mode - low));
  } else {
    return high - Math.sqrt((1 - u) * (high - low) * (high - mode));
  }
}

export { triangular };
