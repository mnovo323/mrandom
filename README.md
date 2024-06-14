# `mrandom` - Python's Random for Node.js

`mrandom` is a Node.js module inspired by Python's built-in `random` module. It's designed to bring the power and flexibility of Python's random number utilities to the TypeScrpt/JavaScript ecosystem. It is built for both ESM and CommonJS.

## Features

- **Python-inspired Interface**: If you're familiar with Python's `random`, you'll feel right at home.
- **Diverse Range of Distributions**: Easily generate numbers from uniform, normal, binomial, and more distributions.
- **Simple Usage**: All utilities accessible from a single import.
- **High Performance**: Designed to deliver random numbers swiftly, even in bulk.
- **Flexible Seed Management**: Control the randomness by setting your own seeds.

## Installation

```bash
npm install @mnovo323/mrandom
```

## Usage

### Basic Example
```typescript
import random from '@mnovo323/mrandom';

const randNumber = random.random();
const randInt = random.randint(1, 10);
const choice = random.choice([1, 2, 3, 4, 5]);

console.log(randNumber); // e.g., 0.123456789
console.log(randInt);    // e.g., 7
console.log(choice);     // e.g., 3
```

### Advanced Example
```typescript
import { randint } from '@mnovo323/mrandom/randint';
import { choice } from '@mnovo323/mrandom/choice';
import { seed } from '@mnovo323/mrandom/xoshiro128plus';
import { gauss } from '@mnovo323/mrandom/gauss';
import { expovariate } from '@mnovo323/mrandom/expovariate';

// Setting the seed
seed(42);

// Generating random numbers
const randInt = randint(1, 10);
const randChoice = choice([1, 2, 3, 4, 5]);
const randNorm = gauss(0, 1);
const randExp = expovariate(1.5);

console.log(randInt);     // e.g., 7
console.log(randChoice);  // e.g., 3
console.log(randNorm);    // e.g., 0.123456789
console.log(randExp);     // e.g., 0.789012345
```

## Available Functions
- `random()`
- `seed(value)`
- `getstate()`
- `setstate(state)`
- `betavariate(alpha, beta)`
- `choice(sequence)`
- `choices(sequence, k)`
- `expovariate(lambda)`
- `gammavariate(alpha, beta)`
- `gauss(mu, sigma)`
- `getrandbits(k)`
- `lognormvariate(mu, sigma)`
- `randbytes(n)`
- `randint(a, b)`
- `randrange(start, stop, step)`
- `sample(population, k)`
- `shuffle(sequence)`
- `triangular(low, high, mode)`
- `uniform(a, b)`
- `xoshiro128plus()`

## Coming Soon

- vonmisesvariate(mu, kappa)
- paretovariate(alpha)
- weibullvariate(alpha, beta)

## Contribution

Contributions are always welcome! If you'd like to help implement the above functions or improve the existing ones, please raise a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)