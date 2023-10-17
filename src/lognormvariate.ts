import { gauss } from './gauss';

function lognormvariate(mu: number, sigma: number): number {
  if (sigma <= 0) {
    throw new Error('Sigma must be > 0');
  }
  const normalSample = gauss(0, 1);
  return Math.exp(mu + sigma * normalSample);
}

export { lognormvariate };
