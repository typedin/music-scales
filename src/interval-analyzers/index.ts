import { IntervalBuilder, Note } from "../../types";
import { intervalBuilder } from "..";

const lookup: { interval: string; callable: IntervalBuilder }[] = [
  {
    interval: "DiminishedSecond",
    callable: (note: Note) =>
      intervalBuilder.diminish(intervalBuilder.minorSecond(note)),
  },
  {
    interval: "MinorSecond",
    callable: intervalBuilder.minorSecond,
  },
  {
    interval: "MajorSecond",
    callable: intervalBuilder.majorSecond,
  },
  {
    interval: "MinorThird",
    callable: intervalBuilder.minorThird,
  },
  {
    interval: "MajorThird",
    callable: intervalBuilder.majorThird,
  },
  {
    interval: "DiminishedForth",
    callable: (note: Note) =>
      intervalBuilder.diminish(intervalBuilder.perfectForth(note)),
  },
  {
    interval: "PerfectForth",
    callable: intervalBuilder.perfectForth,
  },
  {
    interval: "AugmentedForth",
    callable: (note: Note) =>
      intervalBuilder.augment(intervalBuilder.perfectForth(note)),
  },
  {
    interval: "DiminishedFifth",
    callable: (note: Note) =>
      intervalBuilder.diminish(intervalBuilder.perfectFifth(note)),
  },
  {
    interval: "PerfectFifth",
    callable: intervalBuilder.perfectFifth,
  },
  {
    interval: "MinorSixth",
    callable: intervalBuilder.minorSixth,
  },
  {
    interval: "MajorSixth",
    callable: intervalBuilder.majorSixth,
  },
  {
    interval: "MinorSeventh",
    callable: intervalBuilder.minorSeventh,
  },
  {
    interval: "MajorSeventh",
    callable: intervalBuilder.majorSeventh,
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
  if (firstNote.name != secondNote.name) {
    return false;
  }
  if (firstNote.octave != secondNote.octave) {
    return false;
  }
  if (firstNote.alteration != secondNote.alteration) {
    return false;
  }
  return true;
}
