import { AlterationEnum, DiatonicNoteEnum } from "../../src/types";
import MinorSixth from "../../src/interval-builders/MinorSixth";

describe("MinorSixth", () => {
  it("gets a minor sixth for C", () => {
    expect(
      MinorSixth({
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
      })
    ).toEqual({
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.flat,
    });
  });

  it("gets a minor sixth for D", () => {
    expect(
      MinorSixth({
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
      })
    ).toEqual({
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.flat,
    });
  });

  it("gets a minor sixth for Eb", () => {
    expect(
      MinorSixth({ name: DiatonicNoteEnum.E, alteration: AlterationEnum.flat })
    ).toEqual({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.flat,
    });
  });

  it("gets a minor sixth for F#", () => {
    expect(
      MinorSixth({ name: DiatonicNoteEnum.F, alteration: AlterationEnum.sharp })
    ).toEqual({
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.natural,
    });
  });
});
