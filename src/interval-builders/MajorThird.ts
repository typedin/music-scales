import { getNextAlteration, getNoteFromInterval } from "../helpers";

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
    octave: note.octave,
  };
};

export default MajorThird;
