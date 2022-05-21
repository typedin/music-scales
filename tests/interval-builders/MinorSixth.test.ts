import { AlterationEnum } from "../../src/types";
import MinorSixth from "../../src/interval-builders/MinorSixth";

describe("MinorSixth", () => {
  it("gets a minor sixth for C", () => {
    expect(
      MinorSixth({ name: "C", alteration: AlterationEnum.natural })
    ).toEqual({
      name: "A",
      alteration: AlterationEnum.flat,
    });
  });
  it("gets a minor sixth for D", () => {
    expect(
      MinorSixth({ name: "D", alteration: AlterationEnum.natural })
    ).toEqual({
      name: "B",
      alteration: AlterationEnum.flat,
    });
  });
  it("gets a minor sixth for Eb", () => {
    expect(MinorSixth({ name: "E", alteration: AlterationEnum.flat })).toEqual({
      name: "C",
      alteration: AlterationEnum.flat,
    });
  });
  it("gets a minor sixth for F#", () => {
    expect(MinorSixth({ name: "F", alteration: AlterationEnum.sharp })).toEqual(
      {
        name: "D",
        alteration: AlterationEnum.natural,
      }
    );
  });
});
