"use client";

import ArrayCanvas from "@/components/ArrayCanvas";
import { useArrayState } from "@/contexts/Sorting";

const SortingOptions = () => {
  const { array } = useArrayState();

  return (
    <section className="w-full max-w-[90%] h-full flex">
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full bg-purple-950/90 h-2" />
        <div className="flex w-full h-full gap-[1px] flex-row">
          <ArrayCanvas array={array} />
        </div>
      </div>
    </section>
  );
};

export default SortingOptions;
