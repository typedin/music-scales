import Diminish from "../../src/interval-builders/Diminish";
import PerfectFifth from "../../src/interval-builders/PerfectFifth";
import PerfectForth from "../../src/interval-builders/PerfectForth";
import MinorSecond from "../../src/interval-builders/MinorSecond";
import MinorThird from "../../src/interval-builders/MinorThird";
import Octave from "../../src/interval-builders/Octave";
import { DiatonicNoteEnum, AlterationEnum } from "../../src/constants";

describe("Diminished", () => {
  it("can diminish a minor second", () => {
    expect(
      Diminish(
        MinorSecond({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
          octave: 4,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.doubleFlat,
      octave: 4,
    });
  });
  it("can diminish a minor third", () => {
    expect(
      Diminish(
        MinorThird({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
          octave: 4,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.doubleFlat,
      octave: 4,
    });
  });
  it("can diminish a forth", () => {
    expect(
      Diminish(
        PerfectForth({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
          octave: 4,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.flat,
      octave: 4,
    });
  });

  it("can diminish a fifth", () => {
    expect(
      Diminish(
        PerfectFifth({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
          octave: 4,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.flat,
      octave: 4,
    });
  });

  it("can diminish an octave", () => {
    expect(
      Diminish(
        Octave({
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
