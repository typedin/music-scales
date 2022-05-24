"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextAlteration = exports.getPreviousAlteration = exports.getNoteFromInterval = void 0;
var types_1 = require("./types");
function getNoteFromInterval(note, interval) {
    var index = function (note, offset) {
        return (Object.values(types_1.DiatonicNoteEnum).indexOf(note.name) + offset) % 12;
    };
    return Object.values(types_1.DiatonicNoteEnum)[index(note, interval)];
}
exports.getNoteFromInterval = getNoteFromInterval;
function getPreviousAlteration(needle) {
    return Object.values(types_1.AlterationEnum)[Object.values(types_1.AlterationEnum).indexOf(needle) - 1];
}
exports.getPreviousAlteration = getPreviousAlteration;
function getNextAlteration(needle) {
    return Object.values(types_1.AlterationEnum)[Object.values(types_1.AlterationEnum).indexOf(needle) + 1];
}
exports.getNextAlteration = getNextAlteration;
//# sourceMappingURL=helpers.js.map