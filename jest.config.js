const { defaults } = require("jest-config");
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "d.ts"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
