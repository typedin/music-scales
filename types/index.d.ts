export interface Note {
  name: DiatonicNoteEnum;
  alteration: AlterationEnum;
  octave: number;
}

export type ScaleDegree = {
  order: number;
  name: string;
  alteration: string;
  function: string;
};

export enum AlterationEnum {
  doubleFlat = "♭♭",
  flat = "b",
  natural = "",
  sharp = "#",
  doubleSharp = "𝄪",
}

export enum DiatonicNoteEnum {
  C = "C",
  C_SHARP = "-",
  D = "D",
  D_SHARP = "-",
  E = "E",
  F = "F",
  F_SHARP = "-",
  G = "G",
  G_SHARP = "-",
  A = "A",
  A_SHARP = "-",
  B = "B",
}

type IntervalBuilder = (note: Note) => Note;

export type DegreeBuilder = {
  function: string;
  callable: IntervalBuilder;
};
