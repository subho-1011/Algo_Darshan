const customHeightMapper = (val: number, arrayLength: number) => {
  return arrayLength < 50
    ? val * 12
    : arrayLength < 100
    ? val * 6
    : arrayLength < 150
    ? val * 4
    : arrayLength < 210
    ? val * 3
    : val * 2;
};

export default customHeightMapper;
