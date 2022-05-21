import MajorScale from "../../src/scales/MajorScale";
import { alterations } from "../../src/MusicalConstants";

const { doubleFlat, flat, natural, sharp, doubleSharp } = alterations

describe("MajorScale", () => {
  it("gets C major scale", () => {
    const scale = MajorScale({
      name: "C",
      alteration: natural,
    });

    expect(scale.degrees).toEqual([
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
        alteration: natural,
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

  it("gets G major scale", () => {
    const scale = MajorScale({
      name: "G",
      alteration: natural,
    });
    expect(scale.degrees).toEqual([
      {
        order: 1,
        name: "G",
        alteration: natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "A",
        alteration: natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "B",
        alteration: natural,
        function: "mediant",
      },
      {
        order: 4,
        name: "C",
        alteration: natural,
        function: "subdominant",
      },
      {
        order: 5,
        alteration: natural,
        name: "D",
        function: "dominant",
      },
      {
        order: 6,
        name: "E",
        alteration: natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "F",
        alteration: sharp,
        function: "leading tone",
      },
    ]);
  });

  it("gets D major scale", () => {
    const scale = MajorScale({
      name: "D",
      alteration: natural,
    });
    expect(scale.degrees).toEqual([
      {
        order: 1,
        name: "D",
        alteration: natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "E",
        alteration: natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "F",
        alteration: sharp,
        function: "mediant",
      },
      {
        order: 4,
        name: "G",
        alteration: natural,
        function: "subdominant",
      },
      {
        order: 5,
        alteration: natural,
        name: "A",
        function: "dominant",
      },
      {
        order: 6,
        name: "B",
        alteration: natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "C",
        alteration: sharp,
        function: "leading tone",
      },
    ]);
  });

  it("gets E flat major scale", () => {
    const scale = MajorScale({
      name: "E",
      alteration: flat,
    });
    expect(scale.degrees).toEqual([
      {
        order: 1,
        name: "E",
        alteration: flat,
        function: "tonic",
      },
      {
        order: 2,
        name: "F",
        alteration: natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "G",
        alteration: natural,
        function: "mediant",
      },
      {
        order: 4,
        name: "A",
        alteration: flat,
        function: "subdominant",
      },
      {
        order: 5,
        name: "B",
        alteration: flat,
        function: "dominant",
      },
      {
        order: 6,
        name: "C",
        alteration: natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "D",
        alteration: natural,
        function: "leading tone",
      },
    ]);
  });
  it("gets C sharp major scale", () => {
    const scale = MajorScale({
      name: "C",
      alteration: sharp,
    });

    expect(scale.degrees).toEqual([
      {
        order: 1,
        name: "C",
        alteration: sharp,
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        alteration: sharp,
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        alteration: sharp,
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        alteration: sharp,
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        alteration: sharp,
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        alteration: sharp,
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        alteration: sharp,
        function: "leading tone",
      },
    ]);
  });
});
