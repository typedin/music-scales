import { DiatonicNoteEnum, AlterationEnum } from "../../src/constants";
import MinorSixth from "../../src/interval-builders/MinorSixth";

describe("MinorSixth", () => {
  it("gets a minor sixth for C", () => {
    expect(
      MinorSixth({
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 4,
      })
    ).toEqual({
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.flat,
      octave: 4,
    });
  });

  it("gets a minor sixth for D", () => {
    expect(
      MinorSixth({
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        octave: 4,
      })
    ).toEqual({
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.flat,
      octave: 4,
    });
  });

  it("gets a minor sixth for Eb", () => {
    expect(
      MinorSixth({
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.flat,
        octave: 4,
      })
    ).toEqual({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.flat,
      octave: 4,
    });
  });

  it("gets a minor sixth for F#", () => {
    expect(
      MinorSixth({
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.sharp,
        octave: 4,
      })
    ).toEqual({
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.natural,
      octave: 4,
    });
  });
});
