import { getNextAlteration, getNoteFromInterval } from "../helpers";
import { Note } from "../types";

export default function(note: Note): Note {
  const name = getNoteFromInterval(note, 4);
  if (name == "-") {
    return {
      name: getNoteFromInterval(note, 3),
      alteration: getNextAlteration(note.alteration),
    };
  }

  return {
    name,
    alteration: note.alteration,
  };
}
