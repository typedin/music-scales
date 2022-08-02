import frenquecyRatio from "../../src/frequency-ratio/";
import pythagorean from "../../src/frequency-ratio/pythagorean";

const REFERENCE = 261;

describe("pythagorean", () => {
  describe("major second", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "M2",
        },
        pythagorean
      );
      expect(result).toBeCloseTo(294, 0); // expect a D
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
        pythagorean
      );
      expect(result).toBeCloseTo(330, 0); // expect a E
    });
  });
  describe("perfect forth", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "P4",
        },
        pythagorean
      );
      expect(result).toBeCloseTo(348); // expect a F
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
        pythagorean
      );
      expect(result).toEqual(391.5); // expect a G
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
        pythagorean
      );
      expect(result).toBeCloseTo(440, 0); // expect a A
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
        pythagorean
      );
      expect(result).toBeCloseTo(495, 0); // expect a B
    });
  });
  describe("octave", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        REFERENCE,
        {
          direction: "up",
          name: "P8",
        },
        pythagorean
      );
      expect(result).toEqual(522);
    });
  });
});
