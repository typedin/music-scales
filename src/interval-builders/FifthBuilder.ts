import { Note } from "../types";
import { diatonicNoteNames } from "../MusicalConstants";
import { getNextAlteration, index } from "../helpers";

export default function(note: Note): Note {
  let name = diatonicNoteNames[index(note, 7)];
  let alteration = note.alteration;

  if (name == "-") {
    name = diatonicNoteNames[index(note, 6)];
    alteration = getNextAlteration(note.alteration);
  }

  return {
    name,
    alteration,
  };
}
