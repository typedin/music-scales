import {
  majorSecondFlats,
  majorSecondNatural,
  majorSecondSharps,
} from "../__fixtures__/MajorSeconds";
import MajorSecond from "../../src/interval-builders/MajorSecond";

describe("majorSecond", () => {
  it("gets the major second for natural note names", () => {
    majorSecondNatural.forEach(({ input, output }) => {
      expect(MajorSecond(input)).toEqual(output);
    });
  });

  it("gets the major second for sharp note names", () => {
    majorSecondSharps.forEach(({ input, output }) => {
      expect(MajorSecond(input)).toEqual(output);
    });
  });

  it("gets the major second for flat note names", () => {
    majorSecondFlats.forEach(({ input, output }) => {
      expect(MajorSecond(input)).toEqual(output);
    });
  });
});
