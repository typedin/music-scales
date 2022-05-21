import { Note } from "../types";
import MinorThird from "./MinorThird";
import FifthBuilder from "./FifthBuilder";

export default function(note: Note): Note {
  return MinorThird(FifthBuilder(note));
}
