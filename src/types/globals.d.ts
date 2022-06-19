declare global {
  interface Note {
    name: DiatonicNoteEnum;
    alteration: AlterationEnum;
    octave: number;
  }

  type ScaleDegree = {
    order: number;
    name: string;
    alteration: string;
    function: string;
    octave: number;
  };

  type IntervalBuilder = (note: Note) => Note;

  type DegreeBuilder = {
    function: string;
    callable: IntervalBuilder;
  };
}
export {};
