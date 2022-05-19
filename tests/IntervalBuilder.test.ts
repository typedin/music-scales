import { intervalBuilder } from "../src/IntervalBuilder";

describe("IntervalBuilder", () => {
  it("gets the major second for natural note names", () => {
    expect(intervalBuilder("C").majorSecond()).toEqual("D");
    expect(intervalBuilder("D").majorSecond()).toEqual("E");
    expect(intervalBuilder("E").majorSecond()).toEqual("F#");
    expect(intervalBuilder("F").majorSecond()).toEqual("G");
    expect(intervalBuilder("G").majorSecond()).toEqual("A");
    expect(intervalBuilder("A").majorSecond()).toEqual("B");
    expect(intervalBuilder("B").majorSecond()).toEqual("C#");
  });

  it("gets the major second for sharp note names", () => {
    expect(intervalBuilder("C#").majorSecond()).toEqual("D#");
    expect(intervalBuilder("D#").majorSecond()).toEqual("E#");
    expect(intervalBuilder("E").majorSecond()).toEqual("F#");
    expect(intervalBuilder("E#").majorSecond()).toEqual("F𝄪");
    expect(intervalBuilder("F#").majorSecond()).toEqual("G#");
    expect(intervalBuilder("G#").majorSecond()).toEqual("A#");
    expect(intervalBuilder("A#").majorSecond()).toEqual("B#");
    expect(intervalBuilder("B#").majorSecond()).toEqual("C𝄪");
  });

  it("gets the major second for flat note names", () => {
    expect(intervalBuilder("Cb").majorSecond()).toEqual("Db");
    expect(intervalBuilder("Db").majorSecond()).toEqual("Eb");
    expect(intervalBuilder("Eb").majorSecond()).toEqual("F");
    expect(intervalBuilder("Fb").majorSecond()).toEqual("Gb");
    expect(intervalBuilder("Gb").majorSecond()).toEqual("Ab");
    expect(intervalBuilder("Ab").majorSecond()).toEqual("Bb");
    expect(intervalBuilder("Bb").majorSecond()).toEqual("C");
  });

  it("gets the minor second for natural note names", () => {
    expect(intervalBuilder("C").minorSecond()).toEqual("Db");
    expect(intervalBuilder("D").minorSecond()).toEqual("Eb");
    expect(intervalBuilder("E").minorSecond()).toEqual("F");
    expect(intervalBuilder("F").minorSecond()).toEqual("Gb");
    expect(intervalBuilder("G").minorSecond()).toEqual("Ab");
    expect(intervalBuilder("A").minorSecond()).toEqual("Bb");
    expect(intervalBuilder("B").minorSecond()).toEqual("C");
  });

  it("gets the minor second for sharp note names", () => {
    expect(intervalBuilder("C#").minorSecond()).toEqual("D");
    expect(intervalBuilder("D#").minorSecond()).toEqual("E");
    expect(intervalBuilder("E").minorSecond()).toEqual("F");
    expect(intervalBuilder("E#").minorSecond()).toEqual("F#");
    expect(intervalBuilder("F#").minorSecond()).toEqual("G");
    expect(intervalBuilder("G#").minorSecond()).toEqual("A");
    expect(intervalBuilder("A#").minorSecond()).toEqual("B");
    expect(intervalBuilder("B#").minorSecond()).toEqual("C#");
  });
  //
  it("gets the major second for flat note names", () => {
    expect(intervalBuilder("Cb").minorSecond()).toEqual("D♭♭");
    expect(intervalBuilder("Db").minorSecond()).toEqual("E♭♭");
    expect(intervalBuilder("Eb").minorSecond()).toEqual("Fb");
    expect(intervalBuilder("Fb").minorSecond()).toEqual("G♭♭");
    expect(intervalBuilder("Gb").minorSecond()).toEqual("A♭♭");
    expect(intervalBuilder("Ab").minorSecond()).toEqual("B♭♭");
    expect(intervalBuilder("Bb").minorSecond()).toEqual("Cb");
  });
});
