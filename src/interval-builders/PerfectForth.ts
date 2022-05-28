import { IntervalBuilder, Note } from "../../types";
import { getNoteFromInterval, getPreviousAlteration } from "../helpers";

const ForthBuilder: IntervalBuilder = (note: Note): Note => {
  let name = getNoteFromInterval(note, 5);
  let alteration = note.alteration;

  if (name == "-") {
    name = getNoteFromInterval(note, 6);
    alteration = getPreviousAlteration(note.alteration);
  }

  return {
    name,
    alteration,
    octave: note.octave,
  };
};

export default ForthBuilder;
