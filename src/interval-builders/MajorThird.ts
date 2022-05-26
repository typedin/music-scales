import { getNextAlteration, getNoteFromInterval } from "../../helpers";
import { IntervalBuilder, Note } from "../../types";

const MajorThird: IntervalBuilder = (note: Note): Note => {
  let name = getNoteFromInterval(note, 4);
  let alteration = note.alteration;

  if (name == "-") {
    name = getNoteFromInterval(note, 3);
    alteration = getNextAlteration(note.alteration);
  }

  return {
    name,
    alteration,
  };
};

export default MajorThird;
