import { IntervalBuilder, Note } from "../types";
import MajorThird from "./MajorThird";
import FifthBuilder from "./FifthBuilder";

const MajorSeventh: IntervalBuilder = (note: Note): Note =>
  MajorThird(FifthBuilder(note));

export default MajorSeventh;
