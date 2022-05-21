import MajorScale from "../../src/scales/MajorScale";
import { AlterationEnum } from "../../src/types";


describe("MajorScale", () => {
  it("gets C major scale", () => {
    const scale = MajorScale({
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
        alteration: AlterationEnum.natural,
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

  it("gets G major scale", () => {
    const scale = MajorScale({
      name: "G",
      alteration: AlterationEnum.natural,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: "G",
        alteration: AlterationEnum.natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "A",
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "B",
        alteration: AlterationEnum.natural,
        function: "mediant",
      },
      {
        order: 4,
        name: "C",
        alteration: AlterationEnum.natural,
        function: "subdominant",
      },
      {
        order: 5,
        alteration: AlterationEnum.natural,
        name: "D",
        function: "dominant",
      },
      {
        order: 6,
        name: "E",
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "F",
        alteration: AlterationEnum.sharp,
        function: "leading tone",
      },
    ]);
  });

  it("gets D major scale", () => {
    const scale = MajorScale({
      name: "D",
      alteration: AlterationEnum.natural,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: "D",
        alteration: AlterationEnum.natural,
        function: "tonic",
      },
      {
        order: 2,
        name: "E",
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "F",
        alteration: AlterationEnum.sharp,
        function: "mediant",
      },
      {
        order: 4,
        name: "G",
        alteration: AlterationEnum.natural,
        function: "subdominant",
      },
      {
        order: 5,
        alteration: AlterationEnum.natural,
        name: "A",
        function: "dominant",
      },
      {
        order: 6,
        name: "B",
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "C",
        alteration: AlterationEnum.sharp,
        function: "leading tone",
      },
    ]);
  });

  it("gets E flat major scale", () => {
    const scale = MajorScale({
      name: "E",
      alteration: AlterationEnum.flat,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: "E",
        alteration: AlterationEnum.flat,
        function: "tonic",
      },
      {
        order: 2,
        name: "F",
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: "G",
        alteration: AlterationEnum.natural,
        function: "mediant",
      },
      {
        order: 4,
        name: "A",
        alteration: AlterationEnum.flat,
        function: "subdominant",
      },
      {
        order: 5,
        name: "B",
        alteration: AlterationEnum.flat,
        function: "dominant",
      },
      {
        order: 6,
        name: "C",
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: "D",
        alteration: AlterationEnum.natural,
        function: "leading tone",
      },
    ]);
  });
  it("gets C sharp major scale", () => {
    const scale = MajorScale({
      name: "C",
      alteration: AlterationEnum.sharp,
    });

    expect(scale).toEqual([
      {
        order: 1,
        name: "C",
        alteration: AlterationEnum.sharp,
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        alteration: AlterationEnum.sharp,
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        alteration: AlterationEnum.sharp,
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        alteration: AlterationEnum.sharp,
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        alteration: AlterationEnum.sharp,
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        alteration: AlterationEnum.sharp,
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        alteration: AlterationEnum.sharp,
        function: "leading tone",
      },
    ]);
  });
});
