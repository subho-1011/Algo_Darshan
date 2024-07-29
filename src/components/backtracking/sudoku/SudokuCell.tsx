import React from "react";
import { cn } from "@/lib/utils";
import { type SudokuCell } from "@/contexts/Backtracking/sudokuContext";

const SudokuCell = ({
  row,
  size,
  i,
}: {
  row: SudokuCell[];
  size: number;
  i: number;
}) => {
  return (
    <>
      {row.map((cell, j) => (
        <>
          <div
            className={cn(
              "flex justify-center items-center border h-16 w-16 border-purple-950 text-center text-4xl font-bold",
              cell.value === 0 ? "text-gray-400" : "text-primary-foreground",
              i % 3 === 0 && "border-t-4",
              j % 3 === 0 && "border-l-4",
              i === size - 1 && "border-b-4",
              j === size - 1 && "border-r-4",
              cell.state === "initial" && " text-muted-foreground",
              cell.state === "filled" && " text-emerald-500"
            )}
          >
            {cell.value !== 0 ? cell.value : null}
          </div>
        </>
      ))}
    </>
  );
};

export default React.memo(SudokuCell);
