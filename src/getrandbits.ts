import { random } from './xoshiro128plus';

function getrandbits(k: number): bigint {
  if (k <= 0) {
    throw new Error('Number of bits must be a positive integer');
  }

  let result = BigInt(0);
  for (let i = 0; i < k; i++) {
    const bit = random() < 0.5 ? BigInt(0) : BigInt(1); // Generate a random bit
    result = (result << BigInt(1)) | bit; // Add the bit to the result
  }

  return result;
}

export { getrandbits };
