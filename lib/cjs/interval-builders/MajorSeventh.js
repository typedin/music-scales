"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MajorThird_1 = __importDefault(require("./MajorThird"));
var PerfectFifth_1 = __importDefault(require("./PerfectFifth"));
var MajorSeventh = function (note) {
    return (0, MajorThird_1.default)((0, PerfectFifth_1.default)(note));
};
exports.default = MajorSeventh;
//# sourceMappingURL=MajorSeventh.js.map