export type Alteration = string | null;
export interface Note {
  name: string;
  alteration: AlterationEnum;
  octave?: number;
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
