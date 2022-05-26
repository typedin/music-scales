import { Note, AlterationEnum, IntervalBuilder } from "../types";
import { getNoteFromInterval, getPreviousAlteration } from "../helpers";

function getName(note: Note): any {
  if (note.name == "B" || note.name == "E") {
    return getNoteFromInterval(note, 1);
  }
  return getNoteFromInterval(note, 2);
}

function getAlteration(note: Note): AlterationEnum {
  if (note.name == "B" || note.name == "E") {
    return note.alteration;
  }

  return getPreviousAlteration(note.alteration);
}

const MinorSecond: IntervalBuilder = function (note: Note): Note {
  return {
    name: getName(note),
    alteration: getAlteration(note),
  };
};

export default MinorSecond;
