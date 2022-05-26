import { DegreeBuilder, Note } from "../types";
import PerfectFifth from "../interval-builders/PerfectFifth";
import PerfectForth from "../interval-builders/PerfectForth";
import MajorSecond from "../interval-builders/MajorSecond";
import MajorSeventh from "../interval-builders/MajorSeventh";
import MajorSixth from "../interval-builders/MajorSixth";
import MajorThird from "../interval-builders/MajorThird";
import { ScaleBuilder } from "../ScaleBuilder";

const MajorScale: Array<DegreeBuilder> = [
  {
    callable: (note: Note): Note => note,
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
    callable: PerfectForth,
    function: "subdominant",
  },
  {
    callable: PerfectFifth,
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

export default (note: Note) => ScaleBuilder(note, MajorScale);
