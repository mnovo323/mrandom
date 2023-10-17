import { random } from './xoshiro128plus';

function gauss(mu: number = 0, sigma: number = 1): number {
  if (sigma < 0) {
    throw new Error('Sigma must be non-negative');
  }

  let u, v, s;
  do {
    u = random() * 2 - 1;
    v = random() * 2 - 1;
    s = u * u + v * v;
  } while (s >= 1 || s === 0);

  const mul = Math.sqrt((-2.0 * Math.log(s)) / s);
  return mu + sigma * u * mul;
}

export { gauss };
export { gauss as normalvariate };
