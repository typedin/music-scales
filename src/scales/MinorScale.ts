import { Note } from "../types";
import { scaleBuilder } from "../helpers";
import FifthBuilder from "../interval-builders/FifthBuilder";
import ForthBuilder from "../interval-builders/ForthBuilder";
import MajorSecond from "../interval-builders/MajorSecond";
import MajorSeventh from "../interval-builders/MajorSeventh";
import MinorThird from "../interval-builders/MinorThird";
import MinorSixth from "../interval-builders/MinorSixth";
import MajorSixth from "../interval-builders/MajorSixth";
import MinorSeventh from "../interval-builders/MinorSeventh";

const MinorHarmonicSkeleton = [
  {
    collable: undefined,
    function: "tonic",
  },
  {
    collable: MajorSecond,
    function: "supertonic",
  },
  {
    collable: MinorThird,
    function: "mediant",
  },
  {
    collable: ForthBuilder,
    function: "subdominant",
  },
  {
    collable: FifthBuilder,
    function: "dominant",
  },
  {
    collable: MinorSixth,
    function: "submediant",
  },
  {
    collable: MajorSeventh,
    function: "leading tone",
  },
];

const MinorMelocicAscendantSkeleton = [
  {
    collable: undefined,
    function: "tonic",
  },
  {
    collable: MajorSecond,
    function: "supertonic",
  },
  {
    collable: MinorThird,
    function: "mediant",
  },
  {
    collable: ForthBuilder,
    function: "subdominant",
  },
  {
    collable: FifthBuilder,
    function: "dominant",
  },
  {
    collable: MajorSixth,
    function: "submediant",
  },
  {
    collable: MajorSeventh,
    function: "leading tone",
  },
];

const MinorMelocicDescendantSkeleton = [
  {
    collable: undefined,
    function: "tonic",
  },
  {
    collable: MajorSecond,
    function: "supertonic",
  },
  {
    collable: MinorThird,
    function: "mediant",
  },
  {
    collable: ForthBuilder,
    function: "subdominant",
  },
  {
    collable: FifthBuilder,
    function: "dominant",
  },
  {
    collable: MinorSixth,
    function: "submediant",
  },
  {
    collable: MinorSeventh,
    function: "leading tone",
  },
];

export function MinorHarmonicScale(note: Note) {
  return scaleBuilder(note, MinorHarmonicSkeleton);
}

export function MinorMelodicScale(note: Note) {
  return {
    ascendant: scaleBuilder(note, MinorMelocicAscendantSkeleton),
    descendant: scaleBuilder(note, MinorMelocicDescendantSkeleton),
  };
}
