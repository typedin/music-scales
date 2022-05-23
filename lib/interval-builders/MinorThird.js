import { getNoteFromInterval, getPreviousAlteration } from "../helpers";
var MinorThird = function (note) {
    var name = getNoteFromInterval(note, 4);
    var alteration = getPreviousAlteration(note.alteration);
    if (name == "-") {
        name = getNoteFromInterval(note, 3);
        alteration = note.alteration;
    }
    return {
        name: name,
        alteration: alteration,
    };
};
export default MinorThird;
//# sourceMappingURL=MinorThird.js.map