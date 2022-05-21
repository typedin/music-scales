import MajorSixth from "../../src/interval-builders/MajorSixth";

import {
  majorSixthFlats,
  majorSixthNatural,
  majorSixthSharps,
} from "../__fixtures__/MajorSixths";

describe("MajorSixth", () => {
  it("can get all major sixths for natural notes", () => {
    majorSixthNatural.forEach(({ input, output }) => {
      expect(MajorSixth(input)).toEqual(output);
    });
  });
  it("can get all major sixths for flat notes", () => {
    majorSixthFlats.forEach(({ input, output }) => {
      expect(MajorSixth(input)).toEqual(output);
    });
  });
  it("can get all major sixths for sharp notes", () => {
    majorSixthSharps.forEach(({ input, output }) => {
      expect(MajorSixth(input)).toEqual(output);
    });
  });
});
