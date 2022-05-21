export type Alteration = string | null;
export interface Note {
  name: string;
  alteration: Alteration;
  octave?: number;
}
