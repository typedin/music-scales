import { getNextAlteration, index } from "../helpers";
import { alterations, diatonicNoteNames } from "../MusicalConstants";
import { Note } from "../types";

const { natural, sharp, flat, doubleSharp } = alterations;

export default function(note: Note): Note {
  if (diatonicNoteNames[index(note, 4)] == "-") {
    let alteration = sharp;
    if (note.alteration == flat) {
      alteration = natural;
    }
    if (note.alteration == sharp) {
      alteration = doubleSharp;
    }
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
