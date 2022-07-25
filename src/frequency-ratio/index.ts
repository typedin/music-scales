type applesauce = {
  direction: string;
  name: string;
};

export default function (
  frequency: number,
  interval: applesauce,
  temperament: any
): number {
  return temperament(frequency)[interval.name][interval.direction];
}
