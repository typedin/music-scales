import is from "../../src/interval-analyzers/index";
import { AlterationEnum, DiatonicNoteEnum, Note } from "../../types";

const C4: Note = {
  name: DiatonicNoteEnum.C,
  alteration: AlterationEnum.natural,
  octave: 4,
};

describe("index", () => {
  it("is an unison", () => {
    expect(is(C4, C4)).toBe("Unison");
  });

  it("is a MajorSecond", () => {
    const D4: Note = {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.natural,
      octave: 4,
    };
    expect(is(C4, D4)).toBe("MajorSecond");
  });
});
