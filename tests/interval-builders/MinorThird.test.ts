import {
  minorThirdFlats,
  minorThirdNatural,
  minorThirdSharps,
} from "../__fixtures__/MinorThirds";
import MinorThird from "../../src/interval-builders/MinorThird";

describe("MinorThird", () => {
  it("gets the minor third for natural note names", () => {
    minorThirdNatural.forEach(({ input, output }) => {
      expect(MinorThird(input)).toEqual(output);
    });
  });

  it("gets the minor third for sharp note names", () => {
    minorThirdSharps.forEach(({ input, output }) => {
      expect(MinorThird(input)).toEqual(output);
    });
  });

  it("gets the minor third for flat note names", () => {
    minorThirdFlats.forEach(({ input, output }) => {
      expect(MinorThird(input)).toEqual(output);
    });
  });
});
