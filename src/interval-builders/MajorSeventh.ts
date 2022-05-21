import { Note } from "../types";
import MajorThird from "./MajorThird";
import FifthBuilder from "./FifthBuilder";

export default function(note: Note): Note {
  return MajorThird(FifthBuilder(note));
}
