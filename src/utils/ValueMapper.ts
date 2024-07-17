type Interval = [number, number];

export default function ValueMapper(
  originalInterval: Interval,
  newInterval: Interval
) {
  const [low1, high1] = originalInterval;
  const [low2, high2] = newInterval;

  return (value: number) => {
    const val = low2 + ((value - low1) * (high2 - high1)) / (high1 - low1);
    return Math.round(val);
  };
}
