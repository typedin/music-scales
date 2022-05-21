import FifthBuilder from "../../src/interval-builders/FifthBuilder";
import { fifthFlats, fifthNaturals, fifthSharps } from "../__fixtures__/Fifths";

describe("FifthBuilder", () => {
  it("gets all perfect fifths for natural notes", () => {
    fifthNaturals.forEach(({ input, output }) => {
      expect(FifthBuilder(input)).toEqual(output);
    });
  });
  it("gets all perfect fifths for flat notes", () => {
    fifthFlats.forEach(({ input, output }) => {
      expect(FifthBuilder(input)).toEqual(output);
    });
  });
  it("gets all perfect fifths for sharp notes", () => {
    fifthSharps.forEach(({ input, output }) => {
      expect(FifthBuilder(input)).toEqual(output);
    });
  });
});
