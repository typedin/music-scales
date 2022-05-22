import { IntervalBuilder, Note } from "../types";
import FifthBuilder from "./FifthBuilder";
import MajorSecond from "./MajorSecond";

const MajorSixth: IntervalBuilder = (note: Note): Note =>
  MajorSecond(FifthBuilder(note));

export default MajorSixth;
