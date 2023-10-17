import { randint } from './randint';

function sample<T>(population: T[], k: number, counts?: number[]): T[] {
  if (k < 0 || (counts !== undefined && counts.length !== population.length)) {
    throw new Error('Invalid arguments.');
  }

  let expandedPopulation: T[] = [];
  if (counts !== undefined) {
    for (let i = 0; i < population.length; i++) {
      expandedPopulation = expandedPopulation.concat(
        Array(counts[i]).fill(population[i]),
      );
    }
  } else {
    expandedPopulation = [...population];
  }

  if (k > expandedPopulation.length) {
    throw new Error('Sample larger than population.');
  }

  for (let i = 0; i < k; i++) {
    const j = randint(i, expandedPopulation.length - 1);
    [expandedPopulation[i], expandedPopulation[j]] = [
      expandedPopulation[j],
      expandedPopulation[i],
    ];
  }

  return expandedPopulation.slice(0, k);
}

export { sample };
