import Octave from "../../src/interval-builders/Octave";
import { AlterationEnum, DiatonicNoteEnum } from "../../src/types";

describe("Octave", () => {
  it("builds an octave", () => {
    expect(
      Octave({
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
