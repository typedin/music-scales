type interval = {
  direction: string;
  name: string;
};

export default function (
  frequency: any,
  interval: interval,
  temperament: any
): number {
  return temperament(frequency)[interval.name][interval.direction];
}
