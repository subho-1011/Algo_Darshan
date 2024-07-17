const selectionSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  speed: number,
  delay: (d: number) => void,
  changeRunningState: (running: boolean) => void,
  changeColorIndexes: (indexes: number[]) => void
) => {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    let minIndex = i;
    changeColorIndexes([i]);

    for (let j = i + 1; j < arrayLength; j++) {
      changeColorIndexes([minIndex, j]);

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }

      setArray([...array]);
      await delay(2000 / speed);
    }

    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
      setArray([...array]);
      await delay(2000 / speed);
    }
  }

  changeRunningState(false);
  changeColorIndexes([]);
};

export default selectionSort;
