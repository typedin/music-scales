import { IntervalBuilder, Note } from "../types";
import MinorThird from "./MinorThird";
import FifthBuilder from "./FifthBuilder";

const MinorSeventh: IntervalBuilder = (note: Note): Note =>
  MinorThird(FifthBuilder(note));

export default MinorSeventh;
