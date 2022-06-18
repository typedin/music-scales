import { AlterationEnum, DiatonicNoteEnum } from "../../src/constants";
import Unison from "../../src/interval-builders/Unison";

describe("Unison", () => {
  it("builds an octave", () => {
    expect(
      Unison({
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 4,
      })
    ).toEqual({
      octave: 4,
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
    });
  });
});
