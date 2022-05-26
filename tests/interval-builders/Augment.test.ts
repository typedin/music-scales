import Augment from "@/interval-builders/Augment";
import MajorThird from "@/interval-builders/MajorThird";
import PerfectFifth from "@/interval-builders/PerfectFifth";
import PerfectForth from "@/interval-builders/PerfectForth";
import { AlterationEnum, DiatonicNoteEnum } from "#types/";

describe("Augment", () => {
  it("can augment a major third", () => {
    expect(
      Augment(
        MajorThird({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.sharp,
    });
  });
  it("can augment a perfect forth", () => {
    expect(
      Augment(
        PerfectForth({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.sharp,
    });
  });

  it("can augment a perfect fifth", () => {
    expect(
      Augment(
        PerfectFifth({
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.natural,
        })
      )
    ).toEqual({
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.sharp,
    });
  });
});
