import { Note } from "../../types";
import { intervalBuilder } from "..";
import MajorSecond from "../interval-builders/MajorSecond";

function splitInterval(interval: string): Array<string> {
  return interval.split(/(?<![A-Z])(?=[A-Z])/);
}
function isDiminished(interval: string): boolean {
  return ["Diminished"].includes(splitInterval(interval)[0]);
}
function isAugmented(interval: string): boolean {
  return ["Augmented"].includes(splitInterval(interval)[0]);
}
function shouldBePerfect(interval: string): boolean {
  return ["Forth", "Fifth", "Octave"].includes(splitInterval(interval)[1]);
}

function getModifier(interval: string): "perfect" | "minor" | "major" {
  let modifier: "perfect" | "minor" | "major";
  if (isDiminished(interval)) {
    modifier = shouldBePerfect(interval) ? "perfect" : "minor";
  } else {
    modifier = shouldBePerfect(interval) ? "perfect" : "major";
  }
  return modifier;
}

function getFirst(interval: string) {
  if (isDiminished(interval)) {
    return "diminish";
  }

  if (isAugmented(interval)) {
    return "augment";
  }
  return interval[0].toLowerCase() + interval.substring(1);
}

function innerCallable(
  firstNote: Note,
  modifier: string,
  interval: string
): any {
  return intervalBuilder[modifier + splitInterval(interval)[1]](firstNote);
}

export default function (
  interval: string,
  firstNote: Note,
  secondNote: Note
): boolean {
  let newNote = intervalBuilder[getFirst(interval)](firstNote);

  if (isDiminished(interval)) {
    newNote = intervalBuilder[getFirst(interval)](
      innerCallable(firstNote, getModifier(interval), interval)
    );
  }

  if (isAugmented(interval)) {
    newNote = intervalBuilder[getFirst(interval)](
      innerCallable(firstNote, getModifier(interval), interval)
    );
  }

  // check for enharmonies
  if (interval === "Unison" && firstNote.name !== secondNote.name) {
    newNote = MajorSecond(firstNote);
    secondNote = {
      name: secondNote.name,
      octave: secondNote.octave,
      alteration: MajorSecond(firstNote).alteration,
    };
  }

  return notesAreTheSame(newNote, secondNote);
}

function notesAreTheSame(firstNote: Note, secondNote: Note): boolean {
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
