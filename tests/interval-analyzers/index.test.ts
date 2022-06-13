import is from "../../src/interval-analyzers/index";
import { AlterationEnum, DiatonicNoteEnum, Note } from "../../types";

const from: Note = {
  name: DiatonicNoteEnum.C,
  alteration: AlterationEnum.natural,
  octave: 4,
};

describe("index", () => {
  it("is an Unison", () => {
    expect(is(from, from)).toEqual({
      name: "unison",
    });
  });

  it("is a MinorSecond", () => {
    const to: Note = {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.flat,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "second",
      quality: "minor",
    });
  });

  it("is a MajorSecond", () => {
    const to: Note = {
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.natural,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "second",
      quality: "major",
    });
  });

  it("is a MinorThird", () => {
    const to: Note = {
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.flat,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "third",
      quality: "minor",
    });
  });

  it("is a MajorThird", () => {
    const to: Note = {
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.natural,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "third",
      quality: "major",
    });
  });

  it("is a PerfectForth", () => {
    const to: Note = {
      name: DiatonicNoteEnum.F,
      alteration: AlterationEnum.natural,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "forth",
      quality: "perfect",
    });
  });

  it("is a PerfectFifth", () => {
    const to: Note = {
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.natural,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "fifth",
      quality: "perfect",
    });
  });

  it("is a MinorSixth", () => {
    const to: Note = {
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.flat,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "sixth",
      quality: "minor",
    });
  });

  it("is a MajorSixth", () => {
    const to: Note = {
      name: DiatonicNoteEnum.A,
      alteration: AlterationEnum.natural,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "sixth",
      quality: "major",
    });
  });

  it("is a MinorSeventh", () => {
    const to: Note = {
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.flat,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "seventh",
      quality: "minor",
    });
  });

  it("is a MajorSeventh", () => {
    const to: Note = {
      name: DiatonicNoteEnum.B,
      alteration: AlterationEnum.natural,
      octave: 4,
    };
    expect(is(from, to)).toEqual({
      name: "seventh",
      quality: "major",
    });
  });

  it("is an octave", () => {
    const to: Note = {
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
      octave: 5,
    };
    expect(is(from, to)).toEqual({
      name: "octave",
      quality: "perfect",
    });
  });
});
