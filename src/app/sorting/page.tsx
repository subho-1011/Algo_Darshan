"use client";

import ArrayCanvas from "@/components/ArrayCanvas";
import { useSortingState } from "@/contexts";

const SortingPage = () => {
  const { array } = useSortingState();

  return (
    <div className="w-full max-w-[90%] h-full flex flex-col">
      <div className="flex w-full bg-purple-950/90 h-2" />
      <div className="flex w-full h-full gap-[1px] flex-row">
        <ArrayCanvas array={array} />
      </div>
    </div>
  );
};

export default SortingPage;
