import Diminish from "../../src/interval-builders/Diminished";
import FifthBuilder from "../../src/interval-builders/FifthBuilder";
import ForthBuilder from "../../src/interval-builders/ForthBuilder";
import MinorSecond from "../../src/interval-builders/MinorSecond";
import MinorThird from "../../src/interval-builders/MinorThird";
import OctaveBuilder from "../../src/interval-builders/OctaveBuilder";
import { AlterationEnum, DiatonicNoteEnum } from "../../src/types";

describe("Diminished", () => {
  it("can diminish a minor second", () => {
    expect(
      Diminish(
        MinorSecond({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.doubleFlat,
    });
  });
  it("can diminish a minor third", () => {
    expect(
      Diminish(
        MinorThird({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.doubleFlat,
    });
  });
  it("can diminish a forth", () => {
    expect(
      Diminish(
        ForthBuilder({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.flat,
    });
  });

  it("can diminish a fifth", () => {
    expect(
      Diminish(
        FifthBuilder({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.flat,
    });
  });

  it("can diminish an octave", () => {
    expect(
      Diminish(
        OctaveBuilder({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
          octave: 4,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.flat,
      octave: 5,
    });
  });
});
