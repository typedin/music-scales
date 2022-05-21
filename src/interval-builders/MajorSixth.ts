import { Note } from "../types";
import FifthBuilder from "./FifthBuilder";
import MajorSecond from "./MajorSecond";

export default function(note: Note): Note {
  return MajorSecond(FifthBuilder(note));
}
