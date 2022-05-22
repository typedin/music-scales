import { IntervalBuilder, Note } from "../types";
import FifthBuilder from "./FifthBuilder";
import MinorSecond from "./MinorSecond";

const MinorSixth: IntervalBuilder = (note: Note): Note =>
  MinorSecond(FifthBuilder(note));
export default MinorSixth;
