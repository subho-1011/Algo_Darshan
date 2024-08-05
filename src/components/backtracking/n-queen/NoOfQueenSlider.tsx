"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  useNQueenActions,
  useNQueenState,
} from "@/contexts/Backtracking/NQueenContext";

const NoOfQueenSlider = () => {
  const { noOfQueens } = useNQueenState();
  const { changeNoOfQueens } = useNQueenActions();

  return (
    <div className="space-y-3">
      <Label className="text-base">
        Number of Queens: <span className="font-semibold">{noOfQueens}</span>
      </Label>
      <Slider
        className="w-60"
        min={4}
        max={8}
        step={1}
        value={[noOfQueens]}
        onValueChange={(value) => changeNoOfQueens(value[0])}
      />
    </div>
  );
};

export default NoOfQueenSlider;
