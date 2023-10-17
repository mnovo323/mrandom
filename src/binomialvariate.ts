import { random } from './xoshiro128plus';

function binomialvariate(n: number, p: number): number {
  if (n < 0 || p < 0 || p > 1) {
    throw new Error('Invalid arguments. Ensure 0 <= n and 0 <= p <= 1.');
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (random() < p) {
      count++;
    }
  }
  return count;
}

export { binomialvariate };
