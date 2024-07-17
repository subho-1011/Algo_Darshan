const insertionSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  speed: number,
  delay: (d: number) => void,
  changeRunningState: (running: boolean) => void,
  changeColorIndexes: (indexes: number[]) => void
) => {
  const arrayLength = array.length;

  for (let i = 1; i < arrayLength; i++) {
    let key = array[i];
    let j = i - 1;

    changeColorIndexes([i]);

    while (j >= 0 && array[j] > key) {
      changeColorIndexes([j, j + 1]);
      array[j + 1] = array[j];
      j = j - 1;
      setArray([...array]);
      await delay(2000 / speed);
    }
    array[j + 1] = key;
    setArray([...array]);
    await delay(2000 / speed);
  }

  changeRunningState(false);
  changeColorIndexes([]);
};

export default insertionSort;
