"use client";

import SudokuCanvas from "./SudokuCanvas";
import SudokuPageButtons from "./Buttons";
import { useSudokuState } from "@/contexts/Backtracking/sudokuContext";

const SudokuPage = () => {
  const { array } = useSudokuState();

  if (array.length === 0) {
    return (
      <div className="flex w-full h-screen text-primary text-2xl px-24 py-12 font-bold">
        Generating a new Sudoku...
      </div>
    );
  }

  return (
    <div className="flex justify-between w-full max-w-6xl pt-10">
      <SudokuCanvas />
      <SudokuPageButtons />
    </div>
  );
};

export default SudokuPage;
