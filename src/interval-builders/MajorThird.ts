import { getNextAlteration, index } from "../helpers";
import { diatonicNoteNames } from "../MusicalConstants";
import { Note } from "../types";

export default function(note: Note): Note {
  const name = diatonicNoteNames[index(note, 4)];
  if (name == "-") {
    return {
      name: diatonicNoteNames[index(note, 3)],
      alteration: getNextAlteration(note.alteration),
    };
  }

  return {
    name: diatonicNoteNames[index(note, 4)],
    alteration: note.alteration,
  };
}
