import { DiatonicNoteEnum } from "../../src/constants";
import { getNextAlteration, getNoteFromInterval } from "../helpers";

const specialCases = (name: DiatonicNoteEnum, note: Note): Note => {
  return {
    name,
    octave: note.octave,
    alteration: getNextAlteration(note.alteration),
  };
};

const MajorSecond: IntervalBuilder = function (note: Note): Note {
  switch (note.name) {
    case "E":
      return specialCases(DiatonicNoteEnum.F, note);
    case "B":
      return specialCases(DiatonicNoteEnum.C, note);
    default:
      return {
        name: getNoteFromInterval(note, 2),
        alteration: note.alteration,
        octave: note.octave,
      };
  }
};
export default MajorSecond;
