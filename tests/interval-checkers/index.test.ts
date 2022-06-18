import is from "../../src/interval-checkers/";
import { AlterationEnum, DiatonicNoteEnum } from "../../src/constants";

const C4: Note = {
  name: DiatonicNoteEnum.C,
  alteration: AlterationEnum.natural,
  octave: 4,
};

describe("Unison", () => {
  describe("is true", () => {
    test("for C4", () => {
      const unison: Note = {
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("Unison", C4, unison)).toBe(true);
    });
    describe("enharmonies", () => {
      test("for E4 and Fb4", () => {
        const E4: Note = {
          name: DiatonicNoteEnum.E,
          alteration: AlterationEnum.natural,
          octave: 4,
        };
        const Fflat4 = {
          name: DiatonicNoteEnum.F,
          alteration: AlterationEnum.flat,
          octave: 4,
        };
        expect(is("Unison", Fflat4, E4)).toBe(true);
        expect(is("Unison", E4, Fflat4)).toBe(true);
      });

      test("for E#4 and F4", () => {
        const Esharp4: Note = {
          name: DiatonicNoteEnum.E,
          alteration: AlterationEnum.sharp,
          octave: 4,
        };
        const F4 = {
          name: DiatonicNoteEnum.F,
          alteration: AlterationEnum.natural,
          octave: 4,
        };
        expect(is("Unison", F4, Esharp4)).toBe(true);
        expect(is("Unison", Esharp4, F4)).toBe(true);
      });

      test("for E##4 and F#4", () => {
        const EdoubleSharp4: Note = {
          name: DiatonicNoteEnum.E,
          alteration: AlterationEnum.doubleSharp,
          octave: 4,
        };
        const Fsharp4 = {
          name: DiatonicNoteEnum.F,
          alteration: AlterationEnum.sharp,
          octave: 4,
        };
        expect(is("Unison", Fsharp4, EdoubleSharp4)).toBe(true);
        expect(is("Unison", EdoubleSharp4, Fsharp4)).toBe(true);
      });

      test("for B#3", () => {
        const Bsharp3: Note = {
          name: DiatonicNoteEnum.B,
          alteration: AlterationEnum.sharp,
          octave: 3,
        };
        expect(is("Unison", C4, Bsharp3)).toBe(true);
        expect(is("Unison", Bsharp3, C4)).toBe(true);
      });

      test("for B##3 and C#4", () => {
        const Bdoublesharp3: Note = {
          name: DiatonicNoteEnum.B,
          alteration: AlterationEnum.doubleSharp,
          octave: 3,
        };
        const Csharp4 = {
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.sharp,
          octave: 4,
        };
        expect(is("Unison", Csharp4, Bdoublesharp3)).toBe(true);
        expect(is("Unison", Bdoublesharp3, Csharp4)).toBe(true);
      });

      test("for Dbb4", () => {
        const Dbb4: Note = {
          name: DiatonicNoteEnum.D,
          alteration: AlterationEnum.doubleFlat,
          octave: 4,
        };
        expect(is("Unison", C4, Dbb4)).toBe(true);
        expect(is("Unison", Dbb4, C4)).toBe(true);
      });
      test("for C##4", () => {
        const CdoubleSharp4: Note = {
          name: DiatonicNoteEnum.C,
          alteration: AlterationEnum.doubleSharp,
          octave: 4,
        };
        const D4 = {
          name: DiatonicNoteEnum.D,
          alteration: AlterationEnum.natural,
          octave: 4,
        };
        expect(is("Unison", CdoubleSharp4, D4)).toBe(true);
        expect(is("Unison", D4, CdoubleSharp4)).toBe(true);
      });
    });
  });

  describe("is false", () => {
    test("for D4", () => {
      const D4: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("Unison", C4, D4)).toBe(false);
    });
    test("for C3", () => {
      const C3: Note = {
        name: DiatonicNoteEnum.C,
        alteration: AlterationEnum.natural,
        octave: 3,
      };
      expect(is("Unison", C4, C3)).toBe(false);
    });
  });
});

describe("MajorSecond", () => {
  describe("is true", () => {
    it("for D4", () => {
      const D4: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("MajorSecond", C4, D4)).toBe(true);
    });
  });

  describe("is false", () => {
    test("for D3", () => {
      const D3: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.natural,
        octave: 3,
      };
      expect(is("MajorSecond", C4, D3)).toBe(false);
    });
    test("for E4", () => {
      const E4: Note = {
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("MajorSecond", C4, E4)).toBe(false);
    });
    test("for Dbb4", () => {
      const Dbb4: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.doubleFlat,
        octave: 4,
      };
      expect(is("MajorSecond", C4, Dbb4)).toBe(false);
    });
  });
});

describe("DiminishedSecond", () => {
  describe("is true", () => {
    it("for Dbb4", () => {
      const Dbb4: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.doubleFlat,
        octave: 4,
      };
      expect(is("DiminishedSecond", C4, Dbb4)).toBe(true);
    });
  });
});

describe("MinorSecond", () => {
  describe("is true", () => {
    it("for Db4", () => {
      const Db4: Note = {
        name: DiatonicNoteEnum.D,
        alteration: AlterationEnum.flat,
        octave: 4,
      };
      expect(is("MinorSecond", C4, Db4)).toBe(true);
    });
  });
});

describe("MinorThird", () => {
  describe("is true", () => {
    it("for Eb4", () => {
      const Eb4: Note = {
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.flat,
        octave: 4,
      };
      expect(is("MinorThird", C4, Eb4)).toBe(true);
    });
  });
});

describe("MajorThird", () => {
  describe("is true", () => {
    it("for E4", () => {
      const E4: Note = {
        name: DiatonicNoteEnum.E,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("MajorThird", C4, E4)).toBe(true);
    });
  });
});

describe("DiminishedForth", () => {
  describe("is true", () => {
    it("for Fb4", () => {
      const Fflat4: Note = {
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.flat,
        octave: 4,
      };
      expect(is("DiminishedForth", C4, Fflat4)).toBe(true);
    });
  });
});

describe("PerfectForth", () => {
  describe("is true", () => {
    it("for F4", () => {
      const F4: Note = {
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("PerfectForth", C4, F4)).toBe(true);
    });
  });
});

describe("AugmentedForth", () => {
  describe("is true", () => {
    it("for F#4", () => {
      const Fsharp4: Note = {
        name: DiatonicNoteEnum.F,
        alteration: AlterationEnum.sharp,
        octave: 4,
      };
      expect(is("AugmentedForth", C4, Fsharp4)).toBe(true);
    });
  });
});

describe("DiminishedFifth", () => {
  describe("is true", () => {
    it("for Gb4", () => {
      const Gflat4: Note = {
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.flat,
        octave: 4,
      };
      expect(is("DiminishedFifth", C4, Gflat4)).toBe(true);
    });
  });
});

describe("PerfectFifth", () => {
  describe("is true", () => {
    it("for G4", () => {
      const G4: Note = {
        name: DiatonicNoteEnum.G,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("PerfectFifth", C4, G4)).toBe(true);
    });
  });
});

describe("MinorSixth", () => {
  describe("is true", () => {
    it("for Ab4", () => {
      const Ab4: Note = {
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.flat,
        octave: 4,
      };
      expect(is("MinorSixth", C4, Ab4)).toBe(true);
    });
  });
});

describe("MajorSixth", () => {
  describe("is true", () => {
    it("for A4", () => {
      const A4: Note = {
        name: DiatonicNoteEnum.A,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("MajorSixth", C4, A4)).toBe(true);
    });
  });
});

describe("MinorSeventh", () => {
  describe("is true", () => {
    it("for Bb4", () => {
      const Bb4: Note = {
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.flat,
        octave: 4,
      };
      expect(is("MinorSeventh", C4, Bb4)).toBe(true);
    });
  });
});

describe("MajorSeventh", () => {
  describe("is true", () => {
    it("for B4", () => {
      const B4: Note = {
        name: DiatonicNoteEnum.B,
        alteration: AlterationEnum.natural,
        octave: 4,
      };
      expect(is("MajorSeventh", C4, B4)).toBe(true);
    });
  });
});
