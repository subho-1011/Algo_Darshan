const bubbleSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  speed: number,
  delay: (d: number) => void,
  changeRunningState: (running: boolean) => void,
  changeColorIndexes: (indexes: number[]) => void
) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    changeColorIndexes([]);
    for (let j = 0; j < arrayLength - i - 1; j++) {
      changeColorIndexes([j, j + 1]);
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }

      setArray([...array]);
      await delay(2000 / speed);
    }
  }

  changeRunningState(false);
  changeColorIndexes([]);
};

export default bubbleSort;
