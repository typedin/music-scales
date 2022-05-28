import is from "../../src/interval-analyzers/";
import { AlterationEnum, DiatonicNoteEnum, Note } from "../../types";

const C4: Note = {
  name: DiatonicNoteEnum.C,
  alteration: AlterationEnum.natural,
  octave: 4,
};

describe("MajorSecond", () => {
  describe("is true", () => {
    it("for D4", () => {
      const D4: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("MajorSecond", C4, D4)).toBe(true);
    });
  });

  describe("is false", () => {
    test("for D3", () => {
      const D3: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        octave: 3,
      };
      expect(is("MajorSecond", C4, D3)).toBe(false);
    });
    test("for E4", () => {
      const E4: Note = {
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("MajorSecond", C4, E4)).toBe(false);
    });
    test("for Dbb4", () => {
      const Dbb4: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.doubleFlat,
        octave: 4,
      };
      expect(is("MajorSecond", C4, Dbb4)).toBe(false);
    });
  });
});

describe("MinorSecond", () => {
  describe("is true", () => {
    it("for Db4", () => {
      const Db4: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.flat,
        octave: 4,
      };
      expect(is("MinorSecond", C4, Db4)).toBe(true);
    });
  });
});
