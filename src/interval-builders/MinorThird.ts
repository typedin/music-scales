import { Note } from "../types";
import { getNoteFromInterval, getPreviousAlteration } from "../helpers";

export default function(note: Note): Note {
  const name = getNoteFromInterval(note, 4);
  let alteration = getPreviousAlteration(note.alteration);

  if (name == "-") {
    return {
      name: getNoteFromInterval(note, 3),
      alteration: note.alteration,
    };
  }

  return {
    name,
    alteration,
  };
}
