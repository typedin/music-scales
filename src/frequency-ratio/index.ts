type applesauce = {
  direction: string;
  interval: string;
  frequency: number;
};

export default function (reference: applesauce, temperament: any): number {
  return temperament(reference)[reference.interval][reference.direction];
}
