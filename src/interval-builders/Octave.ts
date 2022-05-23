import { IntervalBuilder, Note } from "../../src/types";

const OctaveBuilder: IntervalBuilder = (note: Note): Note => ({
  ...note,
  octave: typeof note.octave === "number" ? note.octave + 1 : 1,
});
export default OctaveBuilder;
