import { MinorHarmonicScale, MinorMelodicScale } from "../../src/scales/MinorScale";
import { alterations } from "../../src/MusicalConstants";

const { doubleFlat, flat, natural, sharp, doubleSharp } = alterations;

describe("MinorScale", () => {
  it("gets C minor harmonic scale", () => {
    const scale = MinorHarmonicScale({
      name: "C",
      alteration: natural,
    });

    expect(scale).toEqual([
      {
        order: 1,
        name: "C",
        alteration: natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        alteration: natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        alteration: flat,
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        alteration: natural,
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        alteration: natural,
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        alteration: flat,
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        alteration: natural,
        function: "leading tone",
      },
    ]);
  });

  it("gets C minor melodic ascendant scale", () => {
    const scale = MinorMelodicScale({
      name: "C",
      alteration: natural,
    });

    expect(scale.ascendant).toEqual([
      {
        order: 1,
        name: "C",
        alteration: natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        alteration: natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        alteration: flat,
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        alteration: natural,
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        alteration: natural,
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        alteration: natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        alteration: natural,
        function: "leading tone",
      },
    ]);
  });

  it("gets C minor melodic descendant", () => {
    const scale = MinorMelodicScale({
      name: "C",
      alteration: natural,
    });

    expect(scale.ascendant).toEqual([
      {
        order: 1,
        name: "C",
        alteration: natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        alteration: natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        alteration: flat,
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        alteration: natural,
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        alteration: natural,
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        alteration: natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        alteration: natural,
        function: "leading tone",
      },
    ]);
  });
});
