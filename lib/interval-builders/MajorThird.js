import { getNextAlteration, getNoteFromInterval } from "../helpers";
var MajorThird = function (note) {
    var name = getNoteFromInterval(note, 4);
    var alteration = note.alteration;
    if (name == "-") {
        name = getNoteFromInterval(note, 3);
        alteration = getNextAlteration(note.alteration);
    }
    return {
        name: name,
        alteration: alteration,
    };
};
export default MajorThird;
//# sourceMappingURL=MajorThird.js.map