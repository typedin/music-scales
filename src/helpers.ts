import { Alteration, Note } from "./types";
import { diatonicNoteNames } from "./MusicalConstants";

import { alterations } from "./MusicalConstants";

export function index(note: Note, offset = 0): number {
  return (diatonicNoteNames.indexOf(note.name) + offset) % 12;
}

const allAlterations = [
  alterations.doubleFlat,
  alterations.flat,
  alterations.natural,
  alterations.sharp,
  alterations.doubleSharp,
];

export function getPreviousAlteration(needle: Alteration): Alteration {
  return allAlterations[allAlterations.indexOf(needle) - 1];
}

export function getNextAlteration(needle: Alteration): Alteration {
  return allAlterations[allAlterations.indexOf(needle) + 1];
}
