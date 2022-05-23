import { getNoteFromInterval, getNextAlteration } from "../helpers";
var PerfectFifth = function (note) {
  var name = getNoteFromInterval(note, 7);
  var alteration = note.alteration;
  if (name == "-") {
    name = getNoteFromInterval(note, 6);
    alteration = getNextAlteration(note.alteration);
  }
  return {
    name: name,
    alteration: alteration,
  };
};
export default PerfectFifth;
//# sourceMappingURL=PerfectFifth.js.map
