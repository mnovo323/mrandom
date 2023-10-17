# `mrandom` - Python's Random for Node.js

`mrandom` is a Node.js module inspired by Python's built-in `random` module. It's designed to bring the power and flexibility of Python's random number utilities to the TypeScrpt/JavaScript ecosystem.

## Features

- **Python-inspired Interface**: If you're familiar with Python's `random`, you'll feel right at home.
- **Diverse Range of Distributions**: Easily generate numbers from uniform, normal, binomial, and more distributions.
- **Simple Usage**: All utilities accessible from a single import.
- **High Performance**: Designed to deliver random numbers swiftly, even in bulk.
- **Flexible Seed Management**: Control the randomness by setting your own seeds.

## Installation

```bash
npm install mrandom
```

## Usage

```typescript
import { random, randint } from 'mrandom';

const randNumber = random();
const randInt = randint(1, 10);
```

## Coming Soon

- vonmisesvariate(mu, kappa)
- paretovariate(alpha)
- weibullvariate(alpha, beta)

## Contribution

Contributions are always welcome! If you'd like to help implement the above functions or improve the existing ones, please raise a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
