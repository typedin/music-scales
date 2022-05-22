import {
  AlterationEnum,
  DiatonicNoteEnum,
  Note,
  ScaleDegree,
  DegreeBuilder,
} from "./types";

export function getNoteFromInterval(
  note: Note,
  interval: number
): DiatonicNoteEnum {
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

export function scaleBuilder(
  tonic: Note,
  degreeBuilders: Array<DegreeBuilder>
) {
  return degreeBuilders.map(
    (degreeBuilder: DegreeBuilder, index): ScaleDegree => ({
      order: index + 1,
      name: index == 0 ? tonic.name : degreeBuilder.callable(tonic).name,
      alteration:
        index == 0
          ? tonic.alteration
          : degreeBuilder.callable(tonic).alteration,
      function: degreeBuilder.function,
    })
  );
}
