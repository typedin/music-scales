import { Alteration, Note, ScaleDegree } from "./types";
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
export function scaleBuilder(tonic: Note, applesauce: Array<any>) {
  return applesauce.map(
    (degree, index): ScaleDegree => ({
      order: index + 1,
      name: index == 0 ? tonic.name : degree.collable(tonic).name,
      alteration:
        index == 0 ? tonic.alteration : degree.collable(tonic).alteration,
      function: degree.function,
    })
  );
}
