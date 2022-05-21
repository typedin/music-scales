import { Note, Alteration, AlterationEnum } from "../types";
import { getPreviousAlteration, index } from "../helpers";
import { diatonicNoteNames } from "../MusicalConstants";

function getName(note: Note): any {
  if (note.name == "B" || note.name == "E") {
    return diatonicNoteNames[index(note, 1)];
  }
  return diatonicNoteNames[index(note, 2)];
}

function getAlteration(note: Note): AlterationEnum {
  if (note.name == "B" || note.name == "E") {
    return note.alteration;
  }

  return getPreviousAlteration(note.alteration);
}

export default function(note: Note): Note {
  return {
    name: getName(note),
    alteration: getAlteration(note),
  };
}
