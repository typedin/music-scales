import { Note } from "../../types";
import is from "../interval-checkers/index";

export default function (firstnote: Note, secondNote: Note) {
  if (is("Unison", firstnote, secondNote)) {
    return "Unison";
  }
  if (is("MajorSecond", firstnote, secondNote)) {
    return "MajorSecond";
  }
}
