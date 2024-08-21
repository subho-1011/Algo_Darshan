"use client";

import { TreeNode } from "@/components";
import { useSearchingState } from "@/contexts";

const LinearSearchCanvas = () => {
  const { array, currIndex, resultIndex } = useSearchingState();

  return (
    <div className="flex flex-wrap my-5 gap-6">
      {array.map((element, i) => (
        <div key={i} className="flex">
          <TreeNode
            value={element}
            variant={
              currIndex === i
                ? "current"
                : resultIndex === i
                ? "secondary"
                : "primary"
            }
          />
        </div>
      ))}
    </div>
  );
};

export default LinearSearchCanvas;
