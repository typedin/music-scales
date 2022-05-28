import { Note } from "../../types";
import { intervalBuilder } from "..";

function isDiminished(interval: string): boolean {
  const applesauce = interval.split(/(?<![A-Z])(?=[A-Z])/);
  return ["Diminished"].includes(applesauce[0]);
}
function isAugmented(interval: string): boolean {
  const applesauce = interval.split(/(?<![A-Z])(?=[A-Z])/);
  return ["Augmented"].includes(applesauce[0]);
}
function shouldBePerfect(interval: string): boolean {
  const applesauce = interval.split(/(?<![A-Z])(?=[A-Z])/);
  return ["Forth", "Fifth", "Octave"].includes(applesauce[1]);
}

export default function (
  interval: string,
  firstNote: Note,
  secondNote: Note
): boolean {
  const applesauce = interval.split(/(?<![A-Z])(?=[A-Z])/);

  if (isDiminished(interval)) {
    const modifier = shouldBePerfect(interval) ? "perfect" : "minor";
    return notesAreEquals(
      intervalBuilder.diminish(
        intervalBuilder[modifier + applesauce[1]](firstNote)
      ),
      secondNote
    );
  }

  if (isAugmented(interval)) {
    const modifier = shouldBePerfect(interval) ? "perfect" : "major";
    return notesAreEquals(
      intervalBuilder.augment(
        intervalBuilder[modifier + applesauce[1]](firstNote)
      ),
      secondNote
    );
  }

  const callable = interval[0].toLowerCase() + interval.substring(1);
  return notesAreEquals(intervalBuilder[callable](firstNote), secondNote);
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
