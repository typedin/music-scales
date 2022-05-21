import { Note } from "../types";
import FifthBuilder from "./FifthBuilder";
import MinorSecond from "./MinorSecond";

export default function(note: Note): Note {
  return MinorSecond(FifthBuilder(note));
}
