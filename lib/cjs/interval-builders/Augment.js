"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var Augment = function (note) { return (__assign(__assign({}, note), { alteration: (0, helpers_1.getNextAlteration)(note.alteration) })); };
exports.default = Augment;
//# sourceMappingURL=Augment.js.map