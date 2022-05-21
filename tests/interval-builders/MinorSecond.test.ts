import {
  minorSecondFlats,
  minorSecondNatural,
  minorSecondSharps,
} from "../__fixtures__/MinorSeconds";
import MinorSecond from "../../src/interval-builders/MinorSecond";

describe("MinorSecond", () => {
  it("gets the minor second for natural note names", () => {
    minorSecondNatural.forEach(({ input, output }) => {
      expect(MinorSecond(input)).toEqual(output);
    });
  });

  it("gets the minor second for sharp note names", () => {
    minorSecondSharps.forEach(({ input, output }) => {
      expect(MinorSecond(input)).toEqual(output);
    });
  });
  it("gets the major second for flat note names", () => {
    minorSecondFlats.forEach(({ input, output }) => {
      expect(MinorSecond(input)).toEqual(output);
    });
  });
});
