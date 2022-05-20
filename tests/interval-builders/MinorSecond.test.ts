import MinorSecond from "../../src/interval-builders/MinorSecond";

describe("MinorSecond", () => {
  it("gets the minor second for natural note names", () => {
    expect(MinorSecond("C")).toEqual("Db");
    expect(MinorSecond("D")).toEqual("Eb");
    expect(MinorSecond("E")).toEqual("F");
    expect(MinorSecond("F")).toEqual("Gb");
    expect(MinorSecond("G")).toEqual("Ab");
    expect(MinorSecond("A")).toEqual("Bb");
    expect(MinorSecond("B")).toEqual("C");
  });

  it("gets the minor second for sharp note names", () => {
    expect(MinorSecond("C#")).toEqual("D");
    expect(MinorSecond("D#")).toEqual("E");
    expect(MinorSecond("E")).toEqual("F");
    expect(MinorSecond("E#")).toEqual("F#");
    expect(MinorSecond("F#")).toEqual("G");
    expect(MinorSecond("G#")).toEqual("A");
    expect(MinorSecond("A#")).toEqual("B");
    expect(MinorSecond("B#")).toEqual("C#");
  });
  //
  it("gets the major second for flat note names", () => {
    expect(MinorSecond("Cb")).toEqual("D♭♭");
    expect(MinorSecond("Db")).toEqual("E♭♭");
    expect(MinorSecond("Eb")).toEqual("Fb");
    expect(MinorSecond("Fb")).toEqual("G♭♭");
    expect(MinorSecond("Gb")).toEqual("A♭♭");
    expect(MinorSecond("Ab")).toEqual("B♭♭");
    expect(MinorSecond("Bb")).toEqual("Cb");
  });
});
