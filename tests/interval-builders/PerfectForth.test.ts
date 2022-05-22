import PerfectForth from "../../src/interval-builders/PerfectForth";
import { forthFlats, forthNatural, forthSharps } from "../__fixtures__/Forths";

describe("PerfectForth", () => {
  it("gets all perfect forths for natural notes", () => {
    forthNatural.forEach(({ input, output }) => {
      expect(PerfectForth(input)).toEqual(output);
    });
  });
  it("gets all perfect forths for flat notes", () => {
    forthFlats.forEach(({ input, output }) => {
      expect(PerfectForth(input)).toEqual(output);
    });
  });
  it("gets all perfect forths for sharp notes", () => {
    forthSharps.forEach(({ input, output }) => {
      expect(PerfectForth(input)).toEqual(output);
    });
  });
});
