import { Note } from "../types";
import { index } from "../helpers";
import { diatonicNoteNames } from "../MusicalConstants";
import { alterations } from "../../src/MusicalConstants";

const { flat, doubleFlat, sharp, doubleSharp, natural } = alterations;
function getAlteration(note: Note): string {
  if (note.alteration == sharp) {
    return natural;
  }

  if (note.alteration == flat) {
    return doubleFlat;
  }
  return flat;
}

export default function(note: Note): Note {
  const name = diatonicNoteNames[index(note, 4)];
  let alteration = getAlteration(note);

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
