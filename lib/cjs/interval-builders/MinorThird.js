"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var MinorThird = function (note) {
    var name = (0, helpers_1.getNoteFromInterval)(note, 4);
    var alteration = (0, helpers_1.getPreviousAlteration)(note.alteration);
    if (name == "-") {
        name = (0, helpers_1.getNoteFromInterval)(note, 3);
        alteration = note.alteration;
    }
    return {
        name: name,
        alteration: alteration,
    };
};
exports.default = MinorThird;
//# sourceMappingURL=MinorThird.js.map