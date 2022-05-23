"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PerfectFifth_1 = __importDefault(require("../interval-builders/PerfectFifth"));
var PerfectForth_1 = __importDefault(require("../interval-builders/PerfectForth"));
var MajorSecond_1 = __importDefault(require("../interval-builders/MajorSecond"));
var MajorSeventh_1 = __importDefault(require("../interval-builders/MajorSeventh"));
var MajorSixth_1 = __importDefault(require("../interval-builders/MajorSixth"));
var MajorThird_1 = __importDefault(require("../interval-builders/MajorThird"));
var ScaleBuilder_1 = require("../ScaleBuilder");
var MajorScale = [
    {
        callable: function (note) { return note; },
        function: "tonic",
    },
    {
        callable: MajorSecond_1.default,
        function: "supertonic",
    },
    {
        callable: MajorThird_1.default,
        function: "mediant",
    },
    {
        callable: PerfectForth_1.default,
        function: "subdominant",
    },
    {
        callable: PerfectFifth_1.default,
        function: "dominant",
    },
    {
        callable: MajorSixth_1.default,
        function: "submediant",
    },
    {
        callable: MajorSeventh_1.default,
        function: "leading tone",
    },
];
exports.default = (function (note) { return (0, ScaleBuilder_1.ScaleBuilder)(note, MajorScale); });
//# sourceMappingURL=MajorScale.js.map