import { MinorHarmonicScale, MinorMelodicScale } from "../../src/scales/MinorScale";
import { AlterationEnum, DiatonicNoteEnum } from "../../src/types";


describe("MinorScale", () => {
  it("gets C minor harmonic scale", () => {
    const scale = MinorHarmonicScale({
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
        alteration: AlterationEnum.flat,
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
        alteration: AlterationEnum.flat,
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

  it("gets C minor melodic ascendant scale", () => {
    const scale = MinorMelodicScale({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
    });

    expect(scale.ascendant).toEqual([
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
        alteration: AlterationEnum.flat,
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

  it("gets C minor melodic descendant", () => {
    const scale = MinorMelodicScale({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
    });

    expect(scale.ascendant).toEqual([
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
        alteration: AlterationEnum.flat,
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
});
