import { MinorHarmonicScale, MinorMelodicScale } from "../../src/scales/MinorScale";
import { AlterationEnum } from "../../src/types";


describe("MinorScale", () => {
  it("gets C minor harmonic scale", () => {
    const scale = MinorHarmonicScale({
      name: "C",
      alteration: AlterationEnum.natural,
    });

    expect(scale).toEqual([
      {
        order: 1,
        name: "C",
        alteration: AlterationEnum.natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        alteration: AlterationEnum.flat,
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        alteration: AlterationEnum.natural,
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        alteration: AlterationEnum.natural,
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        alteration: AlterationEnum.flat,
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        alteration: AlterationEnum.natural,
        function: "leading tone",
      },
    ]);
  });

  it("gets C minor melodic ascendant scale", () => {
    const scale = MinorMelodicScale({
      name: "C",
      alteration: AlterationEnum.natural,
    });

    expect(scale.ascendant).toEqual([
      {
        order: 1,
        name: "C",
        alteration: AlterationEnum.natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        alteration: AlterationEnum.flat,
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        alteration: AlterationEnum.natural,
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        alteration: AlterationEnum.natural,
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        alteration: AlterationEnum.natural,
        function: "leading tone",
      },
    ]);
  });

  it("gets C minor melodic descendant", () => {
    const scale = MinorMelodicScale({
      name: "C",
      alteration: AlterationEnum.natural,
    });

    expect(scale.ascendant).toEqual([
      {
        order: 1,
        name: "C",
        alteration: AlterationEnum.natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        alteration: AlterationEnum.flat,
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        alteration: AlterationEnum.natural,
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        alteration: AlterationEnum.natural,
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        alteration: AlterationEnum.natural,
        function: "leading tone",
      },
    ]);
  });
});
