import frenquecyRatio from "../../src/frequency-ratio/";

describe("frenquecy-ratio", () => {
  it("can calculate an octave up", () => {
    const result = frenquecyRatio({
      direction: "up",
      interval: "P8",
      frequency: 220,
    });
    expect(result).toEqual(440);
  });
  it("can calculate an octave down", () => {
    const result = frenquecyRatio({
      direction: "down",
      interval: "P8",
      frequency: 440,
    });
    expect(result).toEqual(220);
  });

  it("can calculate a perfect fifth up", () => {
    const result = frenquecyRatio({
      direction: "up",
      interval: "P5",
      frequency: 261, // which is a C
    });
    expect(result).toEqual(391.5); // expect a G
  });

  it("can calculate a perfect fifth down", () => {
    const result = frenquecyRatio({
      direction: "down",
      interval: "P5",
      frequency: 391.5,
    });
    expect(result).toEqual(261);
  });
});
