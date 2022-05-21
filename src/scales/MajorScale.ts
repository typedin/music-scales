import FifthBuilder from "../interval-builders/FifthBuilder";
import ForthBuilder from "../interval-builders/ForthBuilder";
import MajorSecond from "../interval-builders/MajorSecond";
import MajorSeventh from "../interval-builders/MajorSeventh";
import MajorSixth from "../interval-builders/MajorSixth";
import MajorThird from "../interval-builders/MajorThird";
import { Note } from "../types";

const shape = [
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

export default function(note: Note) {
  const degrees = [];
  shape.forEach((degree, index) => {
    if (index == 0) {
      degrees.push({
        order: index + 1,
        name: note.name,
        alteration: note.alteration,
        function: degree.function,
      });
    } else {
      degrees.push({
        order: index + 1,
        name: degree.collable(note).name,
        alteration: degree.collable(note).alteration,
        function: degree.function,
      });
    }
  });
  return { degrees: degrees };
}
