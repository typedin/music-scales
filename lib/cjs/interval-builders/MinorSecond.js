"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
function getName(note) {
    if (note.name == "B" || note.name == "E") {
        return (0, helpers_1.getNoteFromInterval)(note, 1);
    }
    return (0, helpers_1.getNoteFromInterval)(note, 2);
}
function getAlteration(note) {
    if (note.name == "B" || note.name == "E") {
        return note.alteration;
    }
    return (0, helpers_1.getPreviousAlteration)(note.alteration);
}
var MinorSecond = function (note) {
    return {
        name: getName(note),
        alteration: getAlteration(note),
    };
};
exports.default = MinorSecond;
//# sourceMappingURL=MinorSecond.js.map