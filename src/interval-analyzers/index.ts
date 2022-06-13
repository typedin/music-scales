import { Note } from "../../types";
import is from "../interval-checkers/index";

type Interval = {
  name: string;
  quality?: string;
};

export default function (firstnote: Note, secondNote: Note): Interval | never {
  if (is("Unison", firstnote, secondNote)) {
    return {
      name: "unison",
    };
  }

  if (is("MinorSecond", firstnote, secondNote)) {
    return {
      name: "second",
      quality: "minor",
    };
  }

  if (is("MajorSecond", firstnote, secondNote)) {
    return {
      name: "second",
      quality: "major",
    };
  }

  if (is("MinorThird", firstnote, secondNote)) {
    return {
      name: "third",
      quality: "minor",
    };
  }

  if (is("MajorThird", firstnote, secondNote)) {
    return {
      name: "third",
      quality: "major",
    };
  }

  if (is("PerfectForth", firstnote, secondNote)) {
    return {
      name: "forth",
      quality: "perfect",
    };
  }

  if (is("PerfectFifth", firstnote, secondNote)) {
    return {
      name: "fifth",
      quality: "perfect",
    };
  }

  if (is("MinorSixth", firstnote, secondNote)) {
    return {
      name: "sixth",
      quality: "minor",
    };
  }

  if (is("MajorSixth", firstnote, secondNote)) {
    return {
      name: "sixth",
      quality: "major",
    };
  }

  if (is("MinorSeventh", firstnote, secondNote)) {
    return {
      name: "seventh",
      quality: "minor",
    };
  }

  if (is("MajorSeventh", firstnote, secondNote)) {
    return {
      name: "seventh",
      quality: "major",
    };
  }

  if (is("Octave", firstnote, secondNote)) {
    return {
      name: "octave",
      quality: "perfect",
    };
  }

  throw Error(
    `Could not check the interval between those notes: ${firstnote.name} - ${secondNote.name}`
  );
}
