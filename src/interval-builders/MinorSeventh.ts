import { IntervalBuilder, Note } from "../types";
import MinorThird from "./MinorThird";
import PerfectFifth from "./PerfectFifth";

const MinorSeventh: IntervalBuilder = (note: Note): Note =>
  MinorThird(PerfectFifth(note));

export default MinorSeventh;
