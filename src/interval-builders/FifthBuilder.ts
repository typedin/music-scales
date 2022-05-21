import { Note } from "../types";
import { getNoteFromInterval, getNextAlteration } from "../helpers";

export default function(note: Note): Note {
  let name = getNoteFromInterval(note, 7);
  let alteration = note.alteration;

  if (name == "-") {
    name = getNoteFromInterval(note, 6);
    alteration = getNextAlteration(note.alteration);
  }

  return {
    name,
    alteration,
  };
}
