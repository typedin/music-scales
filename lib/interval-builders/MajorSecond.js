import { DiatonicNoteEnum } from "../types";
import { getNextAlteration, getNoteFromInterval } from "../helpers";
var specialCases = function (name, note) {
    return {
        name: name,
        alteration: getNextAlteration(note.alteration),
    };
};
var MajorSecond = function (note) {
    switch (note.name) {
        case "E":
            return specialCases(DiatonicNoteEnum.F, note);
        case "B":
            return specialCases(DiatonicNoteEnum.C, note);
        default:
            return {
                name: getNoteFromInterval(note, 2),
                alteration: note.alteration,
            };
    }
};
export default MajorSecond;
//# sourceMappingURL=MajorSecond.js.map