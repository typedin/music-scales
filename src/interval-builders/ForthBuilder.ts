import { Note } from "../types";
import { getNoteFromInterval, getPreviousAlteration } from "../helpers";

export default function(note: Note): Note {
  let name = getNoteFromInterval(note, 5);
  let alteration = note.alteration;

  if (name == "-") {
    name = getNoteFromInterval(note, 6);
    alteration = getPreviousAlteration(note.alteration);
  }

  return {
    name,
    alteration,
  };
}
