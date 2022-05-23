import { Note } from "../types";
export declare function MinorHarmonicScale(
  note: Note
): import("../types").ScaleDegree[];
export declare function MinorMelodicScale(note: Note): {
  ascendant: import("../types").ScaleDegree[];
  descendant: import("../types").ScaleDegree[];
};
