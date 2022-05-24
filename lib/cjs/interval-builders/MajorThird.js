"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var MajorThird = function (note) {
    var name = (0, helpers_1.getNoteFromInterval)(note, 4);
    var alteration = note.alteration;
    if (name == "-") {
        name = (0, helpers_1.getNoteFromInterval)(note, 3);
        alteration = (0, helpers_1.getNextAlteration)(note.alteration);
    }
    return {
        name: name,
        alteration: alteration,
    };
};
exports.default = MajorThird;
//# sourceMappingURL=MajorThird.js.map