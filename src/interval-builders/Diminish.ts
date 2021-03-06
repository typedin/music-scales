import { getPreviousAlteration } from "../helpers";

function Diminish(note: Note): Note {
  return {
    ...note,
    alteration: getPreviousAlteration(note.alteration),
  };
}

export default Diminish;
