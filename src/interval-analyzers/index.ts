import { IntervalBuilder, Note } from "../../types";
import MajorSecond from "../interval-builders/MajorSecond";
import MinorSecond from "../interval-builders/MinorSecond";

const lookup: { interval: string; callable: IntervalBuilder }[] = [
  {
    interval: "MajorSecond",
    callable: MajorSecond,
  },
  {
    interval: "MinorSecond",
    callable: MinorSecond,
  },
];

export default function (
  interval: string,
  firstNote: Note,
  secondNote: Note
): boolean {
  const callable = lookup.find(
    (aThing: { interval: string; callable: IntervalBuilder }) =>
      aThing.interval == interval
  )?.callable;
  if (!callable) {
    return false;
  }
  return notesAreEquals(callable(firstNote), secondNote);
}

function notesAreEquals(firstNote: Note, secondNote: Note): boolean {
  console.log(firstNote);
  console.log(secondNote);
  if (firstNote.name != secondNote.name) {
    return false;
  }
  if (firstNote.alteration != secondNote.alteration) {
    return false;
  }
  if (firstNote.octave != secondNote.octave) {
    return false;
  }
  return true;
}
