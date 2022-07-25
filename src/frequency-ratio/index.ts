type interval = {
  direction: string;
  name: string;
};

export default function (
  frequency: number,
  interval: interval,
  temperament: any
): number {
  return temperament(frequency)[interval.name][interval.direction];
}
