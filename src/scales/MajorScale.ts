import { Note } from "../types";
import { scaleBuilder } from "../helpers";
import FifthBuilder from "../interval-builders/FifthBuilder";
import ForthBuilder from "../interval-builders/ForthBuilder";
import MajorSecond from "../interval-builders/MajorSecond";
import MajorSeventh from "../interval-builders/MajorSeventh";
import MajorSixth from "../interval-builders/MajorSixth";
import MajorThird from "../interval-builders/MajorThird";

const MajorScale = [
  {
    collable: undefined,
    function: "tonic",
  },
  {
    collable: MajorSecond,
    function: "supertonic",
  },
  {
    collable: MajorThird,
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

export default (note: Note) => scaleBuilder(note, MajorScale);
