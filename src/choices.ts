import { random } from './xoshiro128plus';

function choices<T>(
  population: Iterable<T>,
  weights?: number[],
  cumWeights?: number[],
  k: number = 1,
): T[] {
  if (Object.keys(population).length === 0) {
    throw new Error('Population cannot be empty.');
  }

  const arr = Array.from(population);

  if (arr.length === 0) throw new Error('Population cannot be empty.');

  if (weights !== undefined && cumWeights !== undefined) {
    throw new TypeError('Cannot specify both weights and cum_weights.');
  }

  if (weights !== undefined && weights.length !== arr.length) {
    throw new Error('Weights length should match population length.');
  }

  if (weights === undefined && cumWeights === undefined) {
    weights = Array(arr.length).fill(1);
  }

  if (weights !== undefined) {
    cumWeights = [];
    let sum = 0;
    for (const weight of weights) {
      sum += weight;
      cumWeights.push(sum);
    }
  }

  if (cumWeights !== undefined && cumWeights.every((w) => w === 0)) {
    throw new Error('All weights are zero.');
  }

  const results: T[] = [];

  for (let i = 0; i < k; i++) {
    if (cumWeights === undefined) throw new Error('cumWeights is undefined.');
    const rand = random() * cumWeights[cumWeights.length - 1];
    const chosenIndex = cumWeights.findIndex((w) => w >= rand);
    results.push(arr[chosenIndex]);
  }

  return results;
}

export { choices };
