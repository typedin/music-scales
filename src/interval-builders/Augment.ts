import { getNextAlteration } from "../helpers";
import { Note } from "../../types";

const Augment = (note: Note): Note => ({
  ...note,
  alteration: getNextAlteration(note.alteration),
});

export default Augment;
