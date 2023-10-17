import { random } from './xoshiro128plus';

function expovariate(lambda: number): number {
  if (lambda <= 0) {
    throw new Error('Lambda must be > 0');
  }

  return -Math.log(1 - random()) / lambda;
}

export { expovariate };
