import { randrange } from './randrange';

function randint(a: number, b: number): number {
  return randrange(a, b + 1);
}

export { randint };
