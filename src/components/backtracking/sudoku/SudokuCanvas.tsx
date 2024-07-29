"use client";

import { cn } from "@/lib/utils";
import { useSudokuState } from "@/contexts/Backtracking/sudokuContext";
import SudokuCell from "./SudokuCell";

const SudokuCanvas = () => {
  const { array, size } = useSudokuState();

  return (
    <div className="flex flex-col justify-between w-full max-w-6xl">
      <div className="flex flex-col">
        {array.map((row, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-full text-primary text-4xl font-bold"
          >
            <SudokuCell row={row} size={size} i={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SudokuCanvas;
