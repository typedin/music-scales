export function ScaleBuilder(
  tonic: Note,
  degreeBuilders: Array<DegreeBuilder>
): Array<ScaleDegree> {
  return degreeBuilders.map(
    (degreeBuilder: DegreeBuilder, index): ScaleDegree => ({
      order: index + 1,
      name: index == 0 ? tonic.name : degreeBuilder.callable(tonic).name,
      alteration:
        index == 0
          ? tonic.alteration
          : degreeBuilder.callable(tonic).alteration,
      function: degreeBuilder.function,
      octave: tonic.octave,
    })
  );
}
