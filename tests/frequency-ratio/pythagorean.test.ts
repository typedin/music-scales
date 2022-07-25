import pythagorean from "../../src/frequency-ratio/pythagorean";
import frenquecyRatio from "../../src/frequency-ratio/";
describe("frenquecy-ratio", () => {
  describe("major second", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        {
          direction: "up",
          interval: "M2",
          frequency: 261, // which is a C
        },
        pythagorean
      );
      expect(result).toBeCloseTo(294, 0); // expect a D
    });
  });
  describe("major third", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        {
          direction: "up",
          interval: "M3",
          frequency: 261, // which is a C
        },
        pythagorean
      );
      expect(result).toBeCloseTo(330, 0); // expect a E
    });
  });
  describe("perfect forth", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        {
          direction: "up",
          interval: "P4",
          frequency: 261, // which is a C
        },
        pythagorean
      );
      expect(result).toBeCloseTo(348); // expect a F
    });
  });

  describe("perfect fifth", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        {
          direction: "up",
          interval: "P5",
          frequency: 261, // which is a C
        },
        pythagorean
      );
      expect(result).toEqual(391.5); // expect a G
    });
  });

  describe("minor sixth", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        {
          direction: "up",
          interval: "m6",
          frequency: 261, // which is a C
        },
        pythagorean
      );
      expect(result).toBeCloseTo(440, 0); // expect a A
    });
  });
  describe("major seventh", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        {
          direction: "up",
          interval: "M7",
          frequency: 261, // which is a C
        },
        pythagorean
      );
      expect(result).toBeCloseTo(495, 0); // expect a B
    });
  });
  describe("octave", () => {
    it("can be calculated up", () => {
      const result = frenquecyRatio(
        {
          direction: "up",
          interval: "P8",
          frequency: 220,
        },
        pythagorean
      );
      expect(result).toEqual(440);
    });
  });
});
