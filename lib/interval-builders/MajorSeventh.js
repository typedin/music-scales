import MajorThird from "./MajorThird";
import PerfectFifth from "./PerfectFifth";
var MajorSeventh = function (note) {
  return MajorThird(PerfectFifth(note));
};
export default MajorSeventh;
//# sourceMappingURL=MajorSeventh.js.map
