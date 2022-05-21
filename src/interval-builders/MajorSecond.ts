import { Note } from "../types";
import { getNextAlteration, index } from "../helpers";
import { diatonicNoteNames } from "../MusicalConstants";

const specialCases = (name: string, note: Note): Note => {
  return {
    name,
    alteration: getNextAlteration(note.alteration),
  };
};

export default function(note: Note): Note {
  switch (note.name) {
    case "E":
      return specialCases("F", note);
    case "B":
      return specialCases("C", note);
    default:
      return {
        name: diatonicNoteNames[index(note, 2)],
        alteration: note.alteration,
      };
  }
}
