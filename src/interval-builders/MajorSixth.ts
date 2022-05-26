import { IntervalBuilder, Note } from "../types";
import PerfectFifth from "./PerfectFifth";
import MajorSecond from "./MajorSecond";

const MajorSixth: IntervalBuilder = (note: Note): Note =>
  MajorSecond(PerfectFifth(note));

export default MajorSixth;
