import { AlterationEnum, DiatonicNoteEnum } from "./types";
export function getNoteFromInterval(note, interval) {
    var index = function (note, offset) {
        return (Object.values(DiatonicNoteEnum).indexOf(note.name) + offset) % 12;
    };
    return Object.values(DiatonicNoteEnum)[index(note, interval)];
}
export function getPreviousAlteration(needle) {
    return Object.values(AlterationEnum)[Object.values(AlterationEnum).indexOf(needle) - 1];
}
export function getNextAlteration(needle) {
    return Object.values(AlterationEnum)[Object.values(AlterationEnum).indexOf(needle) + 1];
}
//# sourceMappingURL=helpers.js.map