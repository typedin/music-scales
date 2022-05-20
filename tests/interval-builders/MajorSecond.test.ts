import MajorSecond from "../../src/interval-builders/MajorSecond";

describe("majorSecond", () => {
  it("gets the major second for natural note names", () => {
    expect(MajorSecond("C")).toEqual("D");
    expect(MajorSecond("D")).toEqual("E");
    expect(MajorSecond("E")).toEqual("F#");
    expect(MajorSecond("F")).toEqual("G");
    expect(MajorSecond("G")).toEqual("A");
    expect(MajorSecond("A")).toEqual("B");
    expect(MajorSecond("B")).toEqual("C#");
  });

  it("gets the major second for sharp note names", () => {
    expect(MajorSecond("C#")).toEqual("D#");
    expect(MajorSecond("D#")).toEqual("E#");
    expect(MajorSecond("E")).toEqual("F#");
    expect(MajorSecond("E#")).toEqual("F𝄪");
    expect(MajorSecond("F#")).toEqual("G#");
    expect(MajorSecond("G#")).toEqual("A#");
    expect(MajorSecond("A#")).toEqual("B#");
    expect(MajorSecond("B#")).toEqual("C𝄪");
  });

  it("gets the major second for flat note names", () => {
    expect(MajorSecond("Cb")).toEqual("Db");
    expect(MajorSecond("Db")).toEqual("Eb");
    expect(MajorSecond("Eb")).toEqual("F");
    expect(MajorSecond("Fb")).toEqual("Gb");
    expect(MajorSecond("Gb")).toEqual("Ab");
    expect(MajorSecond("Ab")).toEqual("Bb");
    expect(MajorSecond("Bb")).toEqual("C");
  });
});
