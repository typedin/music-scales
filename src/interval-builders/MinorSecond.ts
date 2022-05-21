import { Note, Alteration } from "../types";
import { index } from "../helpers";
import { diatonicNoteNames } from "../MusicalConstants";

function getName(note: Note): any {
  if (note.name == "B" || note.name == "E") {
    return diatonicNoteNames[index(note, 1)];
  }
  return diatonicNoteNames[index(note, 2)];
}

function getAlteration(note: Note, name: string): Alteration {
  if (note.name == "B" || note.name == "E") {
    return note.alteration;
  }

  if (name == "-") {
    return null;
  }

  if (note.alteration == "#") {
    return null;
  }

  if (note.alteration == "b") {
    return "♭♭";
  }

  return "b";
}

export default function(note: Note): Note {
  const name = getName(note);
  const alteration = getAlteration(note, name);

  return {
    name,
    alteration,
  };
}
