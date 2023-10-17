import { random } from './xoshiro128plus';

function randbytes(n: number): Uint8Array {
  const bytes = new Uint8Array(n);
  for (let i = 0; i < n; i += 4) {
    const rnd = (random() * 0xffffffff) >>> 0;
    bytes[i] = (rnd >>> 24) & 0xff;

    if (i + 1 < n) bytes[i + 1] = (rnd >>> 16) & 0xff;
    if (i + 2 < n) bytes[i + 2] = (rnd >>> 8) & 0xff;
    if (i + 3 < n) bytes[i + 3] = rnd & 0xff;
  }
  return bytes;
}

export { randbytes };
