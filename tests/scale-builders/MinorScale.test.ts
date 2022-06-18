import { DiatonicNoteEnum, AlterationEnum } from "../../src/constants";
import {
  MinorHarmonicScale,
  MinorMelodicScale,
} from "../../src/scale-builders/MinorScale";

describe("MinorScale", () => {
  it("gets C minor harmonic scale", () => {
    const scale = MinorHarmonicScale({
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
        alteration: AlterationEnum.flat,
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
        alteration: AlterationEnum.flat,
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

  it("gets C minor melodic ascendant scale", () => {
    const scale = MinorMelodicScale({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
      octave: 4,
    });

    expect(scale.ascendant).toEqual([
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
        alteration: AlterationEnum.flat,
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

  it("gets C minor melodic descendant", () => {
    const scale = MinorMelodicScale({
      name: DiatonicNoteEnum.C,
      alteration: AlterationEnum.natural,
      octave: 4,
    });

    expect(scale.ascendant).toEqual([
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
        alteration: AlterationEnum.flat,
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
});
