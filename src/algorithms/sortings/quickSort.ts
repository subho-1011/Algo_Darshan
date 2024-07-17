const quickSort = async (
  array: number[],
  setArray: (array: number[]) => void,
  speed: number,
  delay: (d: number) => void,
  changeRunningState: (running: boolean) => void,
  changeColorIndexes: (indexes: number[]) => void
) => {
  const partition = async (
    array: number[],
    low: number,
    high: number
  ): Promise<number> => {
    const pivot = array[high];
    let i = low - 1;

    changeColorIndexes([high]);
    await delay(2000 / speed);

    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        setArray([...array]);
        await delay(2000 / speed);
      }
      changeColorIndexes([i, j]);
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    setArray([...array]);
    await delay(2000 / speed);

    changeColorIndexes([]);
    return i + 1;
  };

  const quickSortRecursive = async (
    array: number[],
    low: number,
    high: number
  ) => {
    if (low < high) {
      const pi = await partition(array, low, high);
      await quickSortRecursive(array, low, pi - 1);
      await quickSortRecursive(array, pi + 1, high);
    }
  };

  await quickSortRecursive(array, 0, array.length - 1);
  setArray([...array]);
  changeRunningState(false);
};

export default quickSort;
