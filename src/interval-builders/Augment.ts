import { getNextAlteration } from "../helpers";

const Augment = (note: Note): Note => ({
  ...note,
  alteration: getNextAlteration(note.alteration),
});

export default Augment;
