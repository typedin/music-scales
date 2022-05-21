import { AlterationEnum, DiatonicNoteEnum } from "../../src/types";

export const minorSecondNatural = [
  {
    input: {
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
    },
    output: {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.flat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.natural,
    },
    output: {
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.flat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.natural,
    },
    output: {
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.natural,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.natural,
    },
    output: {
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.flat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.natural,
    },
    output: {
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.flat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.natural,
    },
    output: {
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.flat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.natural,
    },
    output: {
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
    },
  },
];

export const minorSecondSharps = [
  {
    input: {
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.sharp,
    },
    output: {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.natural,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.sharp,
    },
    output: {
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.natural,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.sharp,
    },
    output: {
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.sharp,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.sharp,
    },
    output: {
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.natural,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.sharp,
    },
    output: {
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.natural,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.sharp,
    },
    output: {
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.natural,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.sharp,
    },
    output: {
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.sharp,
    },
  },
];

export const minorSecondFlats = [
  {
    input: {
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.flat,
    },
    output: {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.doubleFlat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.flat,
    },
    output: {
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.doubleFlat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.flat,
    },
    output: {
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.flat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.flat,
    },
    output: {
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.doubleFlat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.flat,
    },
    output: {
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.doubleFlat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.flat,
    },
    output: {
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.doubleFlat,
    },
  },
  {
    input: {
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.flat,
    },
    output: {
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.flat,
    },
  },
];
