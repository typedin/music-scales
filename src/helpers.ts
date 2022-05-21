import { AlterationEnum, DiatonicNoteEnum, Note, ScaleDegree } from "./types";

export function getNoteFromInterval(note: Note, interval: number): DiatonicNoteEnum {

  return Object.values(DiatonicNoteEnum)[index(note, interval)];
}

function index(note: Note, offset: number): number {
  return (Object.values(DiatonicNoteEnum).indexOf(note.name) + offset) % 12;
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

export function scaleBuilder(tonic: Note, applesauce: Array<any>) {
  return applesauce.map(
    (degree, index): ScaleDegree => ({
      order: index + 1,
      name: index == 0 ? tonic.name : degree.collable(tonic).name,
      alteration:
        index == 0 ? tonic.alteration : degree.collable(tonic).alteration,
      function: degree.function,
    })
  );
}
