import {
  majorThirdFlats,
  majorThirdNatural,
  majorThirdSharps,
} from "../__fixtures__/MajorThirds";
import MajorThird from "../../src/interval-builders/MajorThird";

describe("majorThird", () => {
  it("gets the major second for natural note names", () => {
    majorThirdNatural.forEach(({ input, output }) => {
      expect(MajorThird(input)).toEqual(output);
    });
  });

  it("gets the major second for sharp note names", () => {
    majorThirdSharps.forEach(({ input, output }) => {
      expect(MajorThird(input)).toEqual(output);
    });
  });

  it("gets the major second for flat note names", () => {
    majorThirdFlats.forEach(({ input, output }) => {
      expect(MajorThird(input)).toEqual(output);
    });
  });
});
