/**
 * logic has been taken from here:
 * https://cmtext.indiana.edu/acoustics/chapter1_pitch.php
 */

function formula(frequency: number, semitones: number): number {
  return frequency * Math.pow(2, semitones / 12);
}

export default function equal(reference: number): {
  M2: { up: number };
  M3: { up: number };
  P4: { up: number };
  P5: { up: number };
  m6: { up: number };
  M7: { up: number };
  P8: { up: number };
} {
  const M2 = {
    up: formula(reference, 2),
  };
  const M3 = {
    up: formula(reference, 4),
  };
  const P4 = {
    up: formula(reference, 5),
  };
  const P5 = {
    up: formula(reference, 7),
  };
  const m6 = {
    up: formula(reference, 9),
  };
  const M7 = {
    up: formula(reference, 11),
  };
  const P8 = {
    up: formula(reference, 12),
  };

  return {
    M2,
    M3,
    P4,
    P5,
    m6,
    M7,
    P8,
  };
}
