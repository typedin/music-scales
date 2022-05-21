const [natural, flat, sharp, doubleSharp, doubleFlat] = [
  null,
  "b",
  "#",
  "𝄪",
  "♭♭",
];
const alterations = {
  natural,
  flat,
  sharp,
  doubleSharp,
  doubleFlat,
};
const diatonicNoteNames = [
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
const musicalFunctions: Array<string> = [
  "tonic",
  "supertonic",
  "mediant",
  "subdominant",
  "dominant",
  "submediant",
  "leading tone",
];

const sharps: Array<string> = ["F", "C", "G", "D", "A", "E", "B"];
const musicalNotes: Array<string> = ["C", "D", "E", "F", "G", "A", "B"];

export {
  musicalNotes,
  musicalFunctions,
  sharps,
  diatonicNoteNames,
  alterations,
};
