import { Note } from "../types";
import { diatonicNoteNames } from "../MusicalConstants";
import { getPreviousAlteration, index } from "../helpers";

export default function(note: Note): Note {
  let name = diatonicNoteNames[index(note, 5)];
  let alteration = note.alteration;

  if (name == "-") {
    name = diatonicNoteNames[index(note, 6)];
    alteration = getPreviousAlteration(note.alteration);
  }

  return {
    name,
    alteration,
  };
}
