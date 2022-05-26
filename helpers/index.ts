import { Note, AlterationEnum, DiatonicNoteEnum } from "../types";

export function getNoteFromInterval(
  note: Note,
  interval: number
): DiatonicNoteEnum {
  const index = (note: Note, offset: number): number =>
    (Object.values(DiatonicNoteEnum).indexOf(note.name) + offset) % 12;

  return Object.values(DiatonicNoteEnum)[index(note, interval)];
}

export function getPreviousAlteration(needle: AlterationEnum): AlterationEnum {
  return Object.values(AlterationEnum)[
    Object.values(AlterationEnum).indexOf(needle) - 1
  ];
}

export function getNextAlteration(needle: AlterationEnum): AlterationEnum {
  return Object.values(AlterationEnum)[
    Object.values(AlterationEnum).indexOf(needle) + 1
  ];
}

