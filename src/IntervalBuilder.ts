const diatonicScale = [
  "C",
  "-",
  "D",
  "-",
  "E",
  "F",
  "-",
  "G",
  "-",
  "A",
  "-",
  "B",
];

function index(note: string | string[], offset = 0): number {
  return (diatonicScale.indexOf(note[0]) + offset) % 12;
}

export function intervalBuilder(note: string): any {
  return {
    minorSecond: (): string => {
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
    },
    majorSecond: (): string => {
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
    },
  };
}
