"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var helpers_1 = require("../helpers");
var specialCases = function (name, note) {
    return {
        name: name,
        alteration: (0, helpers_1.getNextAlteration)(note.alteration),
    };
};
var MajorSecond = function (note) {
    switch (note.name) {
        case "E":
            return specialCases(types_1.DiatonicNoteEnum.F, note);
        case "B":
            return specialCases(types_1.DiatonicNoteEnum.C, note);
        default:
            return {
                name: (0, helpers_1.getNoteFromInterval)(note, 2),
                alteration: note.alteration,
            };
    }
};
exports.default = MajorSecond;
//# sourceMappingURL=MajorSecond.js.map