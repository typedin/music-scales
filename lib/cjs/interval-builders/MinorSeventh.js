"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MinorThird_1 = __importDefault(require("./MinorThird"));
var PerfectFifth_1 = __importDefault(require("./PerfectFifth"));
var MinorSeventh = function (note) {
    return (0, MinorThird_1.default)((0, PerfectFifth_1.default)(note));
};
exports.default = MinorSeventh;
//# sourceMappingURL=MinorSeventh.js.map