import { Note } from "./types";
import { diatonicNoteNames } from "./MusicalConstants";

export function index(note: string | string[] | Note, offset = 0): number {
  if (note.hasOwnProperty("name")) {
    return (diatonicNoteNames.indexOf(note.name) + offset) % 12;
  }
  return (diatonicNoteNames.indexOf(note[0]) + offset) % 12;
}

export function noteIsFlat(note: string): boolean {
  return note[1] == "b";
}
export function noteIsSharp(note: string): boolean {
  return note[1] == "#";
}

export function notDiatonicNote(note: string): boolean {
  return note == "-";
}
