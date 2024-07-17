import { delay } from "./utils";

export const bubbleSortAlgorithm = async (
  speed: number,
  array: number[],
  setArray: (array: number[]) => void
) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      setArray([...array]);
      await delay(1010 - speed * 10);
    }
  }
};

export const selectionSortAlgorithm = async (
  speed: number,
  array: number[],
  setArray: (array: number[]) => void
) => {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    setArray([...array]);
    await delay(1010 - speed * 10);
  }
};

export const insertionSortAlgorithm = async (
  speed: number,
  array: number[],
  setArray: (array: number[]) => void
) => {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      setArray([...array]);
      j--;
    }

    array[j + 1] = key;
    setArray([...array]);
    await delay(1010 - speed * 10);
  }
};
