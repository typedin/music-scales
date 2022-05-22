import OctaveBuilder from "../../src/interval-builders/OctaveBuilder";
import { AlterationEnum, DiatonicNoteEnum } from "../../src/types";

describe("OctaveBuilder", () => {
  it("builds an octave", () => {
    expect(
      OctaveBuilder({
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 4,
      })
    ).toEqual({
      octave: 5,
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
    });
  });
});
