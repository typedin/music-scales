"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinorMelodicScale = exports.MinorHarmonicScale = void 0;
var PerfectFifth_1 = __importDefault(require("../interval-builders/PerfectFifth"));
var PerfectForth_1 = __importDefault(require("../interval-builders/PerfectForth"));
var MajorSecond_1 = __importDefault(require("../interval-builders/MajorSecond"));
var MajorSeventh_1 = __importDefault(require("../interval-builders/MajorSeventh"));
var MinorThird_1 = __importDefault(require("../interval-builders/MinorThird"));
var MinorSixth_1 = __importDefault(require("../interval-builders/MinorSixth"));
var MajorSixth_1 = __importDefault(require("../interval-builders/MajorSixth"));
var MinorSeventh_1 = __importDefault(require("../interval-builders/MinorSeventh"));
var ScaleBuilder_1 = require("../ScaleBuilder");
var MinorHarmonicSkeleton = [
    {
        callable: function (note) { return note; },
        function: "tonic",
    },
    {
        callable: MajorSecond_1.default,
        function: "supertonic",
    },
    {
        callable: MinorThird_1.default,
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
        callable: MinorSixth_1.default,
        function: "submediant",
    },
    {
        callable: MajorSeventh_1.default,
        function: "leading tone",
    },
];
var MinorMelocicAscendantSkeleton = [
    {
        callable: function (note) { return note; },
        function: "tonic",
    },
    {
        callable: MajorSecond_1.default,
        function: "supertonic",
    },
    {
        callable: MinorThird_1.default,
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
var MinorMelocicDescendantSkeleton = [
    {
        callable: function (note) { return note; },
        function: "tonic",
    },
    {
        callable: MajorSecond_1.default,
        function: "supertonic",
    },
    {
        callable: MinorThird_1.default,
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
        callable: MinorSixth_1.default,
        function: "submediant",
    },
    {
        callable: MinorSeventh_1.default,
        function: "leading tone",
    },
];
function MinorHarmonicScale(note) {
    return (0, ScaleBuilder_1.ScaleBuilder)(note, MinorHarmonicSkeleton);
}
exports.MinorHarmonicScale = MinorHarmonicScale;
function MinorMelodicScale(note) {
    return {
        ascendant: (0, ScaleBuilder_1.ScaleBuilder)(note, MinorMelocicAscendantSkeleton),
        descendant: (0, ScaleBuilder_1.ScaleBuilder)(note, MinorMelocicDescendantSkeleton),
    };
}
exports.MinorMelodicScale = MinorMelodicScale;
//# sourceMappingURL=MinorScale.js.map