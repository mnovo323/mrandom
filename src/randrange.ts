import { random } from './xoshiro128plus';

function randrange(stop: number): number;
function randrange(start: number, stop: number, step?: number): number;
function randrange(start: number, stop?: number, step: number = 1): number {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  if (step === 0) {
    throw new Error('randrange() step argument must not be zero');
  }

  const width = stop - start;
  if (step === 1 && width > 0) {
    return Math.floor(random() * width) + start;
  } else {
    const n = Math.floor(width / step);
    if (n <= 0) {
      throw new Error(
        'randrange() empty range for randrange(' +
          [start, stop, step].join(', ') +
          ')',
      );
    }
    return Math.floor(random() * n) * step + start;
  }
}

export { randrange };
