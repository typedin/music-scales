import { diatonicScale } from "./MusicalConstants";

export function index(note: string | string[], offset = 0): number {
  return (diatonicScale.indexOf(note[0]) + offset) % 12;
}
