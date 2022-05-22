import { DegreeBuilder, Note } from "../types";
import { scaleBuilder } from "../helpers";
import FifthBuilder from "../interval-builders/FifthBuilder";
import ForthBuilder from "../interval-builders/ForthBuilder";
import MajorSecond from "../interval-builders/MajorSecond";
import MajorSeventh from "../interval-builders/MajorSeventh";
import MajorSixth from "../interval-builders/MajorSixth";
import MajorThird from "../interval-builders/MajorThird";

const MajorScale: Array<DegreeBuilder> = [
  {
    callable: undefined,
    function: "tonic",
  },
  {
    callable: MajorSecond,
    function: "supertonic",
  },
  {
    callable: MajorThird,
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

export default (note: Note) => scaleBuilder(note, MajorScale);
