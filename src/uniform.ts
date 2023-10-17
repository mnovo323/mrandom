import { random } from './xoshiro128plus';

function uniform(a: number, b: number): number {
  return a + (b - a) * random();
}

export { uniform };
