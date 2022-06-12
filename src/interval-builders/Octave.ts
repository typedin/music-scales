import { IntervalBuilder, Note } from "../../types";

const OctaveBuilder: IntervalBuilder = (note: Note): Note => ({
  ...note,
  octave: note.octave + 1,
});
export default OctaveBuilder;
