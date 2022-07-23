type applesauce = {
  direction: string;
  interval: string;
  frequency: number;
};

export default function (applesauce: applesauce): number {
  if (applesauce.interval == "P8") {
    if (applesauce.direction == "up") {
      return applesauce.frequency * 2;
    }
    if (applesauce.direction == "down") {
      return applesauce.frequency / 2;
    }
  }

  if (applesauce.interval == "P5") {
    if (applesauce.direction == "up") {
      return (applesauce.frequency * 3) / 2;
    }
    if (applesauce.direction == "down") {
      return (applesauce.frequency * 2) / 3;
    }
  }
  // default to unison for the moment
  return applesauce.frequency;
}
