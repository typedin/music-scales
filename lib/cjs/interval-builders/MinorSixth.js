"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PerfectFifth_1 = __importDefault(require("./PerfectFifth"));
var MinorSecond_1 = __importDefault(require("./MinorSecond"));
var MinorSixth = function (note) {
    return (0, MinorSecond_1.default)((0, PerfectFifth_1.default)(note));
};
exports.default = MinorSixth;
//# sourceMappingURL=MinorSixth.js.map