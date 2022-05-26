import { DiatonicNoteEnum, IntervalBuilder, Note } from "../../types";
import { getNextAlteration, getNoteFromInterval } from "../helpers";

const specialCases = (name: DiatonicNoteEnum, note: Note): Note => {
  return {
    name,
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
      };
  }
};
export default MajorSecond;
