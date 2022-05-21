import { alterations } from "../../src/MusicalConstants";
const { flat, doubleFlat, sharp, doubleSharp, natural } = alterations;

export const minorThirdFlats = [
  {
    input: {
      name: "C",
      alteration: flat,
    },
    output: {
      name: "E",
      alteration: doubleFlat,
    },
  },
  {
    input: {
      name: "D",
      alteration: flat,
    },
    output: {
      name: "F",
      alteration: flat,
    },
  },
  {
    input: {
      name: "E",
      alteration: flat,
    },
    output: {
      name: "G",
      alteration: flat,
    },
  },
  {
    input: {
      name: "F",
      alteration: flat,
    },
    output: {
      name: "A",
      alteration: doubleFlat,
    },
  },
  {
    input: {
      name: "G",
      alteration: flat,
    },
    output: {
      name: "B",
      alteration: doubleFlat,
    },
  },
  {
    input: {
      name: "A",
      alteration: flat,
    },
    output: {
      name: "C",
      alteration: flat,
    },
  },
  {
    input: {
      name: "B",
      alteration: flat,
    },
    output: {
      name: "D",
      alteration: flat,
    },
  },
];
export const minorThirdSharps = [
  {
    input: {
      name: "C",
      alteration: sharp,
    },
    output: {
      name: "E",
      alteration: natural,
    },
  },
  {
    input: {
      name: "D",
      alteration: sharp,
    },
    output: {
      name: "F",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "E",
      alteration: sharp,
    },
    output: {
      name: "G",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "F",
      alteration: sharp,
    },
    output: {
      name: "A",
      alteration: natural,
    },
  },
  {
    input: {
      name: "G",
      alteration: sharp,
    },
    output: {
      name: "B",
      alteration: natural,
    },
  },
  {
    input: {
      name: "A",
      alteration: sharp,
    },
    output: {
      name: "C",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "B",
      alteration: sharp,
    },
    output: {
      name: "D",
      alteration: sharp,
    },
  },
];
export const minorThirdNatural = [
  {
    input: {
      name: "C",
      alteration: natural,
    },
    output: {
      name: "E",
      alteration: flat,
    },
  },
  {
    input: {
      name: "D",
      alteration: natural,
    },
    output: {
      name: "F",
      alteration: natural,
    },
  },
  {
    input: {
      name: "E",
      alteration: natural,
    },
    output: {
      name: "G",
      alteration: natural,
    },
  },
  {
    input: {
      name: "F",
      alteration: natural,
    },
    output: {
      name: "A",
      alteration: flat,
    },
  },
  {
    input: {
      name: "G",
      alteration: natural,
    },
    output: {
      name: "B",
      alteration: flat,
    },
  },
  {
    input: {
      name: "A",
      alteration: natural,
    },
    output: {
      name: "C",
      alteration: natural,
    },
  },
  {
    input: {
      name: "B",
      alteration: natural,
    },
    output: {
      name: "D",
      alteration: natural,
    },
  },
];
