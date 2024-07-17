import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
} from "@/algorithms";

const Sortings = [
  {
    key: "BubbleSort",
    name: "Bubble Sort",
    functionName: bubbleSort,
    slug: "bubble-sort",
  },
  {
    key: "SelectionSort",
    name: "Selection Sort",
    functionName: selectionSort,
    slug: "selection-sort",
  },
  {
    key: "InsertionSort",
    name: "Insertion Sort",
    functionName: insertionSort,
    slug: "insertion-sort",
  },
  {
    key: "MergeSort",
    name: "Merge Sort",
    functionName: mergeSort,
    slug: "merge-sort",
  },
  {
    key: "QuickSort",
    name: "Quick Sort",
    functionName: quickSort,
    slug: "quick-sort",
  },
];

export default Sortings;
