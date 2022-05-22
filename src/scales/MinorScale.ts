import { DegreeBuilder, Note } from "../types";
import { scaleBuilder } from "../helpers";
import FifthBuilder from "../interval-builders/FifthBuilder";
import ForthBuilder from "../interval-builders/ForthBuilder";
import MajorSecond from "../interval-builders/MajorSecond";
import MajorSeventh from "../interval-builders/MajorSeventh";
import MinorThird from "../interval-builders/MinorThird";
import MinorSixth from "../interval-builders/MinorSixth";
import MajorSixth from "../interval-builders/MajorSixth";
import MinorSeventh from "../interval-builders/MinorSeventh";

const MinorHarmonicSkeleton: Array<DegreeBuilder> = [
  {
    callable: undefined,
    function: "tonic",
  },
  {
    callable: MajorSecond,
    function: "supertonic",
  },
  {
    callable: MinorThird,
    function: "mediant",
  },
  {
    callable: ForthBuilder,
    function: "subdominant",
  },
  {
    callable: FifthBuilder,
    function: "dominant",
  },
  {
    callable: MinorSixth,
    function: "submediant",
  },
  {
    callable: MajorSeventh,
    function: "leading tone",
  },
];

const MinorMelocicAscendantSkeleton = [
  {
    callable: undefined,
    function: "tonic",
  },
  {
    callable: MajorSecond,
    function: "supertonic",
  },
  {
    callable: MinorThird,
    function: "mediant",
  },
  {
    callable: ForthBuilder,
    function: "subdominant",
  },
  {
    callable: FifthBuilder,
    function: "dominant",
  },
  {
    callable: MajorSixth,
    function: "submediant",
  },
  {
    callable: MajorSeventh,
    function: "leading tone",
  },
];

const MinorMelocicDescendantSkeleton = [
  {
    callable: undefined,
    function: "tonic",
  },
  {
    callable: MajorSecond,
    function: "supertonic",
  },
  {
    callable: MinorThird,
    function: "mediant",
  },
  {
    callable: ForthBuilder,
    function: "subdominant",
  },
  {
    callable: FifthBuilder,
    function: "dominant",
  },
  {
    callable: MinorSixth,
    function: "submediant",
  },
  {
    callable: MinorSeventh,
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
