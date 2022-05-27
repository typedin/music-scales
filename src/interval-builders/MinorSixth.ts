import { IntervalBuilder, Note } from "../../types";
import PerfectFifth from "./PerfectFifth";
import MinorSecond from "./MinorSecond";

const MinorSixth: IntervalBuilder = (note: Note): Note =>
  MinorSecond(PerfectFifth(note));
export default MinorSixth;
