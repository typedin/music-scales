import PerfectFifth from "./PerfectFifth";
import MinorSecond from "./MinorSecond";
var MinorSixth = function (note) {
  return MinorSecond(PerfectFifth(note));
};
export default MinorSixth;
//# sourceMappingURL=MinorSixth.js.map
