import equal from "../../src/frequency-ratio/equal";
import frenquecyRatio from "../../src/frequency-ratio/";

const REFERENCE = 261.626;

describe("equal", () => {
  describe("major second", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "M2",
        },
        equal
      );
      expect(result).toBeCloseTo(293.6647, 0); // expect a D
    });
  });
  describe("major third", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "M3",
        },
        equal
      );
      expect(result).toBeCloseTo(329.6275, 0); // expect a D
    });
  });
  describe("perfect fifth", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "P5",
        },
        equal
      );
      expect(result).toBeCloseTo(391.9954, 0); // expect a D
    });
  });

  describe("minor sixth", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "m6",
        },
        equal
      );
      expect(result).toBeCloseTo(440, 0); // expect a D
    });
  });
  describe("major seventh", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "M7",
        },
        equal
      );
      expect(result).toBeCloseTo(493.8833, 0); // expect a D
    });
  });
  describe("perfect octave", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "P8",
        },
        equal
      );
      expect(result).toBeCloseTo(523.2511, 0); // expect a D
    });
  });
});
