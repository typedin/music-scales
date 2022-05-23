import { getNoteFromInterval, getPreviousAlteration } from "../helpers";
var ForthBuilder = function (note) {
  var name = getNoteFromInterval(note, 5);
  var alteration = note.alteration;
  if (name == "-") {
    name = getNoteFromInterval(note, 6);
    alteration = getPreviousAlteration(note.alteration);
  }
  return {
    name: name,
    alteration: alteration,
  };
};
export default ForthBuilder;
//# sourceMappingURL=PerfectForth.js.map
