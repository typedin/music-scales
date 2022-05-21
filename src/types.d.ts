export type Alteration = string | null;
export interface Note {
  name: string;
  alteration: Alteration;
  octave?: number;
}
export type ScaleDegree = {
  order: number;
  name: string;
  alteration: string;
  function: string;
};
