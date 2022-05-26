const { defaults } = require("jest-config");
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "d.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^#types/(.*)$": "<rootDir>/types/$1",
  },
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
