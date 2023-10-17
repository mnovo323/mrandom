import { randint } from '../src/randint';

function choice<T>(seq: Iterable<T>): T {
  const arr = Array.from(seq);
  if (arr.length === 0) {
    throw new Error('Cannot choose from an empty sequence');
  }
  const randomIndex = randint(0, arr.length - 1);
  return arr[randomIndex];
}

export { choice };
