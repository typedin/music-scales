import MajorSeventh from "../../src/interval-builders/MajorSeventh";

import {
  majorSeventhFlats,
  majorSeventhNatural,
  majorSeventhSharps,
} from "../__fixtures__/MajorSevenths";

describe("MajorSeventh", () => {
  it("can get all major sixths for natural notes", () => {
    majorSeventhNatural.forEach(({ input, output }) => {
      expect(MajorSeventh(input)).toEqual(output);
    });
  });
  it("can get all major sixths for flat notes", () => {
    majorSeventhFlats.forEach(({ input, output }) => {
      expect(MajorSeventh(input)).toEqual(output);
    });
  });
  it("can get all major sixths for sharp notes", () => {
    majorSeventhSharps.forEach(({ input, output }) => {
      expect(MajorSeventh(input)).toEqual(output);
    });
  });
});
