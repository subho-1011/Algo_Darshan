"use client";

import { cn } from "@/lib/utils";
import { GiChessQueen } from "react-icons/gi";
import { Label } from "@/components/ui/label";
import {
  useNQueenActions,
  useNQueenState,
} from "@/contexts/Backtracking/NQueenContext";

const NQueenBoard = () => {
  const { queenBoard, hoverArray, colorizedArray, isSolved } = useNQueenState();
  const { selectQueenPosition, updateOnHoveredArray, resetHoveredArray } =
    useNQueenActions();

  return (
    <>
      <div className="flex flex-col">
        <div className="w-1/2 bg-transparent space-y-4 text-black flex flex-col justify-center">
          <Label className="text-2xl text-primary">N-Queen Board</Label>
          <div className="flex flex-col border-2 border-purple-900 w-fit">
            {queenBoard.map((row, rowIdx) => (
              <div key={rowIdx} className="flex w-fit">
                {row.map((value, colIdx) => (
                  <button
                    key={colIdx}
                    className={cn(
                      "flex w-16 h-16 justify-center items-center border-2 border-purple-900 hover:cursor-pointer disabled:hover:bg-rose-700 disabled:cursor-default",
                      colorizedArray[rowIdx][colIdx] ? "bg-purple-500/70" : "",
                      hoverArray[rowIdx][colIdx] ? "bg-purple-500" : ""
                    )}
                    onClick={() => selectQueenPosition([rowIdx, colIdx])}
                    onMouseOver={() => updateOnHoveredArray([rowIdx, colIdx])}
                    onMouseLeave={resetHoveredArray}
                    disabled={colorizedArray[rowIdx][colIdx]}
                  >
                    {value ? (
                      <GiChessQueen size={40} className="fill-purple-950" />
                    ) : null}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NQueenBoard;
