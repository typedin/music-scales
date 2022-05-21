import { musicalFunctions, musicalNotes } from "./MusicalConstants";

export default function(note: string) {
  const index = musicalNotes.indexOf(note);

  const degrees = [];

  for (let i = 0; i < 7; i++) {
    degrees.push({
      order: i + 1,
      name: musicalNotes[(index + i) % 7],
      function: musicalFunctions[i],
    });
  }
  return { degrees: degrees };
}
