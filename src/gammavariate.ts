import { random } from './xoshiro128plus';
import { expovariate } from './expovariate';
import { gauss } from './gauss';

function gammavariate(alpha: number, beta: number): number {
  if (alpha <= 0 || beta <= 0) {
    throw new Error('Alpha and Beta must be > 0');
  }

  if (alpha === 1) {
    return expovariate(beta);
  }

  if (alpha < 1) {
    let u;
    do {
      u = random();
    } while (u === 0);
    return gammavariate(1 + alpha, beta) * Math.pow(u, 1 / alpha);
  }

  const d = alpha - 1 / 3;
  const c = 1 / Math.sqrt(9 * d);

  let x, v;
  while (true) {
    do {
      x = gauss();
      v = 1 + c * x;
    } while (v <= 0);
    v = v * v * v;
    const u = random();
    if (u < 1 - 0.0331 * x * x * x * x) {
      return (d * v) / beta;
    }
    if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) {
      return (d * v) / beta;
    }
  }
}

export { gammavariate };
