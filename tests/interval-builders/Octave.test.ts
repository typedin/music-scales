import { AlterationEnum, DiatonicNoteEnum } from "../../src/constants";
import Octave from "../../src/interval-builders/Octave";

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
