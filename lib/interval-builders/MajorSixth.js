import PerfectFifth from "./PerfectFifth";
import MajorSecond from "./MajorSecond";
var MajorSixth = function (note) {
  return MajorSecond(PerfectFifth(note));
};
export default MajorSixth;
//# sourceMappingURL=MajorSixth.js.map
