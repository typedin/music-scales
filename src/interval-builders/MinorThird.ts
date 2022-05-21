import { Note } from "../types";
import { getPreviousAlteration, index } from "../helpers";
import { diatonicNoteNames } from "../MusicalConstants";

export default function(note: Note): Note {
  const name = diatonicNoteNames[index(note, 4)];
  let alteration = getPreviousAlteration(note.alteration);

  if (name == "-") {
    return {
      name: diatonicNoteNames[index(note, 3)],
      alteration: note.alteration,
    };
  }

  return {
    name,
    alteration,
  };
}
