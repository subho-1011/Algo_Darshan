const mergeSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  speed: number,
  delay: (d: number) => void,
  changeRunningState: (running: boolean) => void,
  changeColorIndexes: (indexes: number[]) => void
) => {
  const merge = async (
    array: number[],
    left: number,
    middle: number,
    right: number
  ) => {
    const leftArray = array.slice(left, middle + 1);
    const rightArray = array.slice(middle + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < leftArray.length && j < rightArray.length) {
      changeColorIndexes([left + i, middle + 1 + j]);
      await delay(2000 / speed);

      if (leftArray[i] <= rightArray[j]) {
        array[k] = leftArray[i];
        i++;
      } else {
        array[k] = rightArray[j];
        j++;
      }
      k++;
      setArray([...array]);
    }

    while (i < leftArray.length) {
      changeColorIndexes([left + i]);
      await delay(2000 / speed);

      array[k] = leftArray[i];
      i++;
      k++;
      setArray([...array]);
    }

    while (j < rightArray.length) {
      changeColorIndexes([middle + 1 + j]);
      await delay(2000 / speed);

      array[k] = rightArray[j];
      j++;
      k++;
      setArray([...array]);
    }

    changeColorIndexes([]);
  };

  const mergeSortRecursive = async (
    array: number[],
    left: number,
    right: number
  ) => {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);

      await mergeSortRecursive(array, left, middle);
      await mergeSortRecursive(array, middle + 1, right);
      await merge(array, left, middle, right);
    }
  };

  await mergeSortRecursive(array, 0, array.length - 1);
  setArray([...array]);
  changeRunningState(false);
};

export default mergeSort;
