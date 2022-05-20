import { index } from "../helpers";
import { diatonicScale } from "../MusicalConstants";

export default function(note: string): any {
  if (note == "Eb") {
    return "F";
  }
  if (note == "Bb") {
    return "C";
  }
  if (note == "E#") {
    return "F𝄪";
  }
  if (note == "B#") {
    return "C𝄪";
  }

  let majorSecond = diatonicScale[index(note, 2)];

  if (majorSecond == "-") {
    return diatonicScale[index(note, 1)] + "#";
  }

  if (note[1] == "#") {
    majorSecond += "#";
  }

  if (note[1] == "b") {
    majorSecond += "b";
  }

  return majorSecond;
}
