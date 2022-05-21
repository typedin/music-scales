import { alterations } from "../../src/MusicalConstants";

const { natural, flat, sharp, doubleSharp } = alterations;
export const majorSixthNatural = [
  {
    input: {
      name: "C",
      alteration: natural,
    },
    output: {
      name: "A",
      alteration: natural,
    },
  },
  {
    input: {
      name: "D",
      alteration: natural,
    },
    output: {
      name: "B",
      alteration: natural,
    },
  },
  {
    input: {
      name: "E",
      alteration: natural,
    },
    output: {
      name: "C",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "F",
      alteration: natural,
    },
    output: {
      name: "D",
      alteration: natural,
    },
  },
  {
    input: {
      name: "G",
      alteration: natural,
    },
    output: {
      name: "E",
      alteration: natural,
    },
  },
  {
    input: {
      name: "A",
      alteration: natural,
    },
    output: {
      name: "F",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "B",
      alteration: natural,
    },
    output: {
      name: "G",
      alteration: sharp,
    },
  },
];

export const majorSixthFlats = [
  {
    input: {
      name: "C",
      alteration: flat,
    },
    output: {
      name: "A",
      alteration: flat,
    },
  },
  {
    input: {
      name: "D",
      alteration: flat,
    },
    output: {
      name: "B",
      alteration: flat,
    },
  },
  {
    input: {
      name: "E",
      alteration: flat,
    },
    output: {
      name: "C",
      alteration: natural,
    },
  },
  {
    input: {
      name: "F",
      alteration: flat,
    },
    output: {
      name: "D",
      alteration: flat,
    },
  },
  {
    input: {
      name: "G",
      alteration: flat,
    },
    output: {
      name: "E",
      alteration: flat,
    },
  },
  {
    input: {
      name: "A",
      alteration: flat,
    },
    output: {
      name: "F",
      alteration: natural,
    },
  },
  {
    input: {
      name: "B",
      alteration: flat,
    },
    output: {
      name: "G",
      alteration: natural,
    },
  },
];
export const majorSixthSharps = [
  {
    input: {
      name: "C",
      alteration: sharp,
    },
    output: {
      name: "A",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "D",
      alteration: sharp,
    },
    output: {
      name: "B",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "E",
      alteration: sharp,
    },
    output: {
      name: "C",
      alteration: doubleSharp,
    },
  },
  {
    input: {
      name: "F",
      alteration: sharp,
    },
    output: {
      name: "D",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "G",
      alteration: sharp,
    },
    output: {
      name: "E",
      alteration: sharp,
    },
  },
  {
    input: {
      name: "A",
      alteration: sharp,
    },
    output: {
      name: "F",
      alteration: doubleSharp,
    },
  },
  {
    input: {
      name: "B",
      alteration: sharp,
    },
    output: {
      name: "G",
      alteration: doubleSharp,
    },
  },
];
