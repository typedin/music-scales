var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var OctaveBuilder = function (note) {
  return __assign(__assign({}, note), { octave: note.octave + 1 });
};
export default OctaveBuilder;
//# sourceMappingURL=Octave.js.map
