import ForthBuilder from "../../src/interval-builders/ForthBuilder";
import { forthFlats, forthNatural, forthSharps } from "../__fixtures__/Forth";

describe("ForthBuilder", () => {
  it("gets all perfect forths for natural notes", () => {
    forthNatural.forEach(({ input, output }) => {
      expect(ForthBuilder(input)).toEqual(output);
    });
  });
  it("gets all perfect forths for flat notes", () => {
    forthFlats.forEach(({ input, output }) => {
      expect(ForthBuilder(input)).toEqual(output);
    });
  });
  it("gets all perfect forths for sharp notes", () => {
    forthSharps.forEach(({ input, output }) => {
      expect(ForthBuilder(input)).toEqual(output);
    });
  });
});
