import { getPreviousAlteration } from "../helpers";
import { Note } from "../../types";

function Diminish(note: Note): Note {
  return {
    ...note,
    alteration: getPreviousAlteration(note.alteration),
  };
}

export default Diminish;
