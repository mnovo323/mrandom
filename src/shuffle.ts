import { randint } from './randint';

function shuffle<T>(array: T[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randint(0, i); // inclusive on both ends
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}

export { shuffle };
