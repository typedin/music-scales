"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PerfectFifth_1 = __importDefault(require("./PerfectFifth"));
var MajorSecond_1 = __importDefault(require("./MajorSecond"));
var MajorSixth = function (note) {
    return (0, MajorSecond_1.default)((0, PerfectFifth_1.default)(note));
};
exports.default = MajorSixth;
//# sourceMappingURL=MajorSixth.js.map