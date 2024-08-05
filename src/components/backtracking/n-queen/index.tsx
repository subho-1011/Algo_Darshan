"use client";

import { useNQueenState } from "@/contexts";
import NoOfQueenSlider from "./NoOfQueenSlider";
import NQueenBoard from "./NQueenBoard";
import NQueenButtons from "./NQueenButtons";
import SuccessMessage from "@/components/common/SuccessMessage";

const NQueenComponents = () => {
  const { isSolved } = useNQueenState();

  return (
    <div className="w-full max-w-6xl pt-4 flex items-center justify-center">
      <div className="flex justify-around w-full">
        <div className="flex flex-col gap-3">
          <NoOfQueenSlider />
          <NQueenBoard />
          <NQueenButtons />
        </div>
        <div className="flex">
          {isSolved && <SuccessMessage text="The board is Solved!" />}
        </div>
      </div>
    </div>
  );
};

export default NQueenComponents;
