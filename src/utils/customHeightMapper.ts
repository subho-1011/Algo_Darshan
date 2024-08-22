function CustomHeightMapper(value: number, array: number[]) {
  const maxheight = window.innerHeight * 0.8;

  const inputMin = Math.min(...array);
  const inputMax = Math.max(...array);

  const normalizedValue = (value - inputMin) / (inputMax - inputMin);
  const mappedValue = 5 + normalizedValue * maxheight;

  return mappedValue;
}

export default CustomHeightMapper;
