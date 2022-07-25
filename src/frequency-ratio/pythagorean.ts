/**
 * logic has been taken from here:
 * https://www.teoria.com/en/articles/temperaments/02-pythagoras.php
 */
type applesauce = {
  direction: "up" | "down";
  interval: string;
  frequency: number;
};

function perfectFifthUp(frequency: number): number {
  return (frequency * 3) / 2;
}

function perfectForthDown(frequency: number): number {
  return (frequency * 3) / 4;
}

export default function (input: applesauce): object {
  const M2 = {
    up: perfectForthDown(perfectFifthUp(input.frequency)),
  };

  const M3 = {
    up: perfectForthDown(
      perfectFifthUp(perfectForthDown(perfectFifthUp(input.frequency)))
    ),
  };

  const P4 = {
    up: (input.frequency * 4) / 3,
  };

  const P5 = {
    up: perfectFifthUp(input.frequency),
  };

  const m6 = {
    up: perfectFifthUp(perfectForthDown(perfectFifthUp(input.frequency))),
  };

  const M7 = {
    up: perfectFifthUp(
      perfectForthDown(
        perfectFifthUp(perfectForthDown(perfectFifthUp(input.frequency)))
      )
    ),
  };

  const P8 = {
    up: input.frequency * 2,
  };

  return {
    M2,
    M3,
    P4,
    P5,
    m6,
    M7,
    P8,
  };
}
