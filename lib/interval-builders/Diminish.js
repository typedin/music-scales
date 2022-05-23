var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { getPreviousAlteration } from "../helpers";
function Diminish(note) {
    return __assign(__assign({}, note), { alteration: getPreviousAlteration(note.alteration) });
}
export default Diminish;
//# sourceMappingURL=Diminish.js.map