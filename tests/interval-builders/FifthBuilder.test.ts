import FifthBuilder from "../../src/interval-builders/FifthBuilder";
import { fifthFlats, fifthNaturals, fifthSharps } from "../__fixtures__/Fifths";

describe("FifthBuilder", () => {
  describe("builds perfect fifths", () => {
    it("for natural notes", () => {
      fifthNaturals.forEach(({ input, output }) => {
        expect(FifthBuilder(input)).toEqual(output);
      });
    });
    it("for flat notes", () => {
      fifthFlats.forEach(({ input, output }) => {
        expect(FifthBuilder(input)).toEqual(output);
      });
    });
    it("for sharp notes", () => {
      fifthSharps.forEach(({ input, output }) => {
        expect(FifthBuilder(input)).toEqual(output);
      });
    });
  });
});
