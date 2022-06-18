import { DiatonicNoteEnum, AlterationEnum } from "../../src/constants";
import MajorScale from "../../src/scale-builders/MajorScale";

describe("MajorScale", () => {
  it("gets C major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
      octave: 4,
    });

    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        function: "tonic",
        octave: 4,
      },
      {
        order: 2,
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        function: "supertonic",
        octave: 4,
      },
      {
        order: 3,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        function: "mediant",
        octave: 4,
      },
      {
        order: 4,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.natural,
        function: "subdominant",
        octave: 4,
      },
      {
        order: 5,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        function: "dominant",
        octave: 4,
      },
      {
        order: 6,
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.natural,
        function: "submediant",
        octave: 4,
      },
      {
        order: 7,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.natural,
        function: "leading tone",
        octave: 4,
      },
    ]);
  });

  it("gets G major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.G,
      alteration: AlterationEnum.natural,
      octave: 4,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        function: "tonic",
        octave: 4,
      },
      {
        order: 2,
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.natural,
        function: "supertonic",
        octave: 4,
      },
      {
        order: 3,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.natural,
        function: "mediant",
        octave: 4,
      },
      {
        order: 4,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        function: "subdominant",
        octave: 4,
      },
      {
        order: 5,
        alteration: AlterationEnum.natural,
        name: DiatonicNoteEnum.D,
        function: "dominant",
        octave: 4,
      },
      {
        order: 6,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        function: "submediant",
        octave: 4,
      },
      {
        order: 7,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.sharp,
        function: "leading tone",
        octave: 4,
      },
    ]);
  });

  it("gets D major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.D,
      alteration: AlterationEnum.natural,
      octave: 4,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        function: "tonic",
        octave: 4,
      },
      {
        order: 2,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        function: "supertonic",
        octave: 4,
      },
      {
        order: 3,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.sharp,
        function: "mediant",
        octave: 4,
      },
      {
        order: 4,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        function: "subdominant",
        octave: 4,
      },
      {
        order: 5,
        alteration: AlterationEnum.natural,
        name: DiatonicNoteEnum.A,
        function: "dominant",
        octave: 4,
      },
      {
        order: 6,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.natural,
        function: "submediant",
        octave: 4,
      },
      {
        order: 7,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.sharp,
        function: "leading tone",
        octave: 4,
      },
    ]);
  });

  it("gets E flat major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.E,
      alteration: AlterationEnum.flat,
      octave: 4,
    });
    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.flat,
        function: "tonic",
        octave: 4,
      },
      {
        order: 2,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.natural,
        function: "supertonic",
        octave: 4,
      },
      {
        order: 3,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        function: "mediant",
        octave: 4,
      },
      {
        order: 4,
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.flat,
        function: "subdominant",
        octave: 4,
      },
      {
        order: 5,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.flat,
        function: "dominant",
        octave: 4,
      },
      {
        order: 6,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        function: "submediant",
        octave: 4,
      },
      {
        order: 7,
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        function: "leading tone",
        octave: 4,
      },
    ]);
  });
  it("gets C sharp major scale", () => {
    const scale = MajorScale({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.sharp,
      octave: 4,
    });

    expect(scale).toEqual([
      {
        order: 1,
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.sharp,
        function: "tonic",
        octave: 4,
      },
      {
        order: 2,
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.sharp,
        function: "supertonic",
        octave: 4,
      },
      {
        order: 3,
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.sharp,
        function: "mediant",
        octave: 4,
      },
      {
        order: 4,
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.sharp,
        function: "subdominant",
        octave: 4,
      },
      {
        order: 5,
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.sharp,
        function: "dominant",
        octave: 4,
      },
      {
        order: 6,
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.sharp,
        function: "submediant",
        octave: 4,
      },
      {
        order: 7,
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.sharp,
        function: "leading tone",
        octave: 4,
      },
    ]);
  });
});
