import MajorScale from "../src/MajorScale";

describe("MajorScale", () => {
  it("gets C major scale", () => {
    const scale = MajorScale("C");

    expect(scale.degrees).toEqual([
      {
        order: 1,
        name: "C",
        function: "tonic",
      },
      {
        order: 2,
        name: "D",
        function: "supertonic",
      },
      {
        order: 3,
        name: "E",
        function: "mediant",
      },
      {
        order: 4,
        name: "F",
        function: "subdominant",
      },
      {
        order: 5,
        name: "G",
        function: "dominant",
      },
      {
        order: 6,
        name: "A",
        function: "submediant",
      },
      {
        order: 7,
        name: "B",
        function: "leading tone",
      },
    ]);
  });

  it("gets G major scale", () => {
    const scale = MajorScale("G");

    expect(scale.degrees).toEqual([
      {
        order: 1,
        name: "G",
        function: "tonic",
      },
      {
        order: 2,
        name: "A",
        function: "supertonic",
      },
      {
        order: 3,
        name: "B",
        function: "mediant",
      },
      {
        order: 4,
        name: "C",
        function: "subdominant",
      },
      {
        order: 5,
        name: "D",
        function: "dominant",
      },
      {
        order: 6,
        name: "E",
        function: "submediant",
      },
      {
        order: 7,
        name: "F#",
        function: "leading tone",
      },
    ]);
  });
});
