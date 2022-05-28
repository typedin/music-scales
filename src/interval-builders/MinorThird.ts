import { IntervalBuilder, Note } from "../../types";
import { getNoteFromInterval, getPreviousAlteration } from "../helpers";

const MinorThird: IntervalBuilder = function (note: Note): Note {
  let name = getNoteFromInterval(note, 4);
  let alteration = getPreviousAlteration(note.alteration);

  if (name == "-") {
    name = getNoteFromInterval(note, 3);
    alteration = note.alteration;
  }

  return {
    name,
    alteration,
    octave: note.octave,
  };
};
export default MinorThird;
