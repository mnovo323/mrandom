import { random, seed, getstate, setstate } from './xoshiro128plus';
import { betavariate } from './betavariate';
import { choice } from './choice';
import { choices } from './choices';
import { expovariate } from './expovariate';
import { gammavariate } from './gammavariate';
import { gauss } from './gauss';
import { getrandbits } from './getrandbits';
import { lognormvariate } from './lognormvariate';
import { randbytes } from './randbytes';
import { randint } from './randint';
import { randrange } from './randrange';
import { sample } from './sample';
import { shuffle } from './shuffle';
import { triangular } from './triangular';
import { uniform } from './uniform';

const randomFunctions = {
  random,
  seed,
  getstate,
  setstate,
  betavariate,
  choice,
  choices,
  expovariate,
  gammavariate,
  gauss,
  getrandbits,
  lognormvariate,
  randbytes,
  randint,
  randrange,
  sample,
  shuffle,
  triangular,
  uniform
};

export {
  random,
  seed,
  getstate,
  setstate,
  betavariate,
  choice,
  choices,
  expovariate,
  gammavariate,
  gauss,
  getrandbits,
  lognormvariate,
  randbytes,
  randint,
  randrange,
  sample,
  shuffle,
  triangular,
  uniform
};

export default randomFunctions;
