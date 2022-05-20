import { index } from "./helpers";
import { diatonicScale } from "./MusicalConstants";

export default function(note: string): any {
  if (note == "E#") {
    return "F#";
  }
  if (note == "Eb") {
    return "Fb";
  }
  if (note == "B#") {
    return "C#";
  }
  if (note == "Bb") {
    return "Cb";
  }

  let applesauce = diatonicScale[index(note, 2)];
  if (note[1] == "#") {
    return applesauce;
  }
  if (note[1] == "b") {
    return applesauce + "♭♭";
  }

  let minorSecond = diatonicScale[index(note, 1)];
  if (minorSecond == "-") {
    return applesauce + "b";
  }

  return minorSecond;
}
