type RNGState = [number, number, number, number];
let state: RNGState = [
  (Math.random() * 0xffffffff) >>> 0,
  (Math.random() * 0xffffffff) >>> 0,
  (Math.random() * 0xffffffff) >>> 0,
  (Math.random() * 0xffffffff) >>> 0,
];

function seed(s: number): void {
  s = s >>> 0;
  state[0] = (s ^ (s << 16)) >>> 0;
  state[1] = (s ^ (s >>> 16)) >>> 0;
  state[2] = (s ^ (state[0] + 0x6d2b79f5)) >>> 0;
  state[3] = (s ^ (state[1] - 0x4a3b8d63)) >>> 0;
}

function rotl(x: number, k: number): number {
  return (x << k) | (x >> (32 - k));
}

function next(): number {
  const result = (state[0] + state[3]) >>> 0;

  const t = state[1] << 9;

  state[2] ^= state[0];
  state[3] ^= state[1];
  state[1] ^= state[2];
  state[0] ^= state[3];

  state[2] ^= t;

  state[3] = rotl(state[3], 11);

  return result;
}

function random(): number {
  return next() / 4294967296;
}

function getstate(): RNGState {
  return state;
}

function setstate(s: RNGState): void {
  state = s;
}

export { seed, random, getstate, setstate };
