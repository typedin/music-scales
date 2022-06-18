import { AlterationEnum, DiatonicNoteEnum } from "../constants";

export function isNoteLower(firstNote: Note, secondNote: Note): boolean {
  const indexOfFirstNote = (): number =>
    Object.values(DiatonicNoteEnum).indexOf(firstNote.name) % 12;
  const indexOfSecondNote = (): number =>
    Object.values(DiatonicNoteEnum).indexOf(secondNote.name) % 12;

  return (
    indexOfFirstNote < indexOfSecondNote && firstNote.octave < secondNote.octave
  );
}

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
