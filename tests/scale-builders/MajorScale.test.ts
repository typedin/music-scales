import MajorScale from "../../src/scale-builders/MajorScale";
import { AlterationEnum, DiatonicNoteEnum } from "../../types";

describe("MajorScale", () => {
  it("gets C major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
    });

    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        function: "tonic",
      },
      {
        order: 2,
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        function: "mediant",
      },
      {
        order: 4,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.natural,
        function: "subdominant",
      },
      {
        order: 5,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        function: "dominant",
      },
      {
        order: 6,
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.natural,
        function: "leading tone",
      },
    ]);
  });

  it("gets G major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.natural,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        function: "tonic",
      },
      {
        order: 2,
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.natural,
        function: "mediant",
      },
      {
        order: 4,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        function: "subdominant",
      },
      {
        order: 5,
        alteration: AlterationEnum.natural,
        name: DiatonicNoteEnum.D,
        function: "dominant",
      },
      {
        order: 6,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.sharp,
        function: "leading tone",
      },
    ]);
  });

  it("gets D major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.natural,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        function: "tonic",
      },
      {
        order: 2,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.sharp,
        function: "mediant",
      },
      {
        order: 4,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        function: "subdominant",
      },
      {
        order: 5,
        alteration: AlterationEnum.natural,
        name: DiatonicNoteEnum.A,
        function: "dominant",
      },
      {
        order: 6,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.sharp,
        function: "leading tone",
      },
    ]);
  });

  it("gets E flat major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.flat,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.flat,
        function: "tonic",
      },
      {
        order: 2,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.natural,
        function: "supertonic",
      },
      {
        order: 3,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        function: "mediant",
      },
      {
        order: 4,
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.flat,
        function: "subdominant",
      },
      {
        order: 5,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.flat,
        function: "dominant",
      },
      {
        order: 6,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        function: "submediant",
      },
      {
        order: 7,
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        function: "leading tone",
      },
    ]);
  });
  it("gets C sharp major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.sharp,
    });

    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.sharp,
        function: "tonic",
      },
      {
        order: 2,
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.sharp,
        function: "supertonic",
      },
      {
        order: 3,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.sharp,
        function: "mediant",
      },
      {
        order: 4,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.sharp,
        function: "subdominant",
      },
      {
        order: 5,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.sharp,
        function: "dominant",
      },
      {
        order: 6,
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.sharp,
        function: "submediant",
      },
      {
        order: 7,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.sharp,
        function: "leading tone",
      },
    ]);
  });
});
