import { Note } from "../types";
import { index } from "../helpers";
import { diatonicNoteNames } from "../MusicalConstants";

const specialCases = (name: string, note: Note): Note => {
  let alteration: string | null;
  if (note.alteration == "b") {
    alteration = null;
  }
  if (!note.alteration) {
    alteration = "#";
  }
  if (note.alteration == "#") {
    alteration = "𝄪";
  }
  return {
    name,
    alteration,
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
