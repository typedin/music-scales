import Augment from "./interval-builders/Augment";
import Diminish from "./interval-builders/Diminish";
import MajorSecond from "./interval-builders/MajorSecond";
import MajorSeventh from "./interval-builders/MajorSeventh";
import MajorSixth from "./interval-builders/MajorSixth";
import MajorThird from "./interval-builders/MajorThird";
import MinorSecond from "./interval-builders/MinorSecond";
import MinorSeventh from "./interval-builders/MinorSeventh";
import MinorSixth from "./interval-builders/MinorSixth";
import MinorThird from "./interval-builders/MinorThird";
import OctaveBuilder from "./interval-builders/Octave";
import PerfectFifth from "./interval-builders/PerfectFifth";
import PerfectForth from "./interval-builders/PerfectForth";
import MajorScale from "./scale-builders/MajorScale";
import {
  MinorHarmonicScale,
  MinorMelodicScale,
} from "./scale-builders/MinorScale";

const intervalBuilder = {
  augment: Augment,
  diminish: Diminish,
  minorSecond: MinorSecond,
  majorSecond: MajorSecond,
  minorThird: MinorThird,
  majorThird: MajorThird,
  perfectForth: PerfectForth,
  perfectFifth: PerfectFifth,
  minorSixth: MinorSixth,
  majorSixth: MajorSixth,
  minorSeventh: MinorSeventh,
  majorSeventh: MajorSeventh,
  octave: OctaveBuilder,
};

const scaleBuilder = {
  majorScale: MajorScale,
  minorMelodicScale: MinorMelodicScale,
  minorHarmonicScale: MinorHarmonicScale,
};

export { intervalBuilder, scaleBuilder };
