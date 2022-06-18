import { DiatonicNoteEnum, AlterationEnum } from "../../src/constants";
import Augment from "../../src/interval-builders/Augment";
import MajorThird from "../../src/interval-builders/MajorThird";
import PerfectFifth from "../../src/interval-builders/PerfectFifth";
import PerfectForth from "../../src/interval-builders/PerfectForth";

describe("Augment", () => {
  it("can augment a major third", () => {
    expect(
      Augment(
        MajorThird({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
          octave: 4,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.sharp,
      octave: 4,
    });
  });
  it("can augment a perfect forth", () => {
    expect(
      Augment(
        PerfectForth({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
          octave: 4,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.sharp,
      octave: 4,
    });
  });

  it("can augment a perfect fifth", () => {
    expect(
      Augment(
        PerfectFifth({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
          octave: 4,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.sharp,
      octave: 4,
    });
  });
});
