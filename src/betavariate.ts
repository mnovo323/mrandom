import { random } from './xoshiro128plus';

function betavariate(alpha: number, beta: number): number {
  if (alpha <= 0 || beta <= 0) {
    throw new Error('alpha and beta must be > 0');
  }

  const y = Math.pow(random(), 1 / alpha);
  const z = Math.pow(random(), 1 / beta);

  return y / (y + z);
}

export { betavariate };
