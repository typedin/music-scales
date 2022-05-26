import { IntervalBuilder, Note } from "../types";
import MajorThird from "./MajorThird";
import PerfectFifth from "./PerfectFifth";

const MajorSeventh: IntervalBuilder = (note: Note): Note =>
  MajorThird(PerfectFifth(note));

export default MajorSeventh;
