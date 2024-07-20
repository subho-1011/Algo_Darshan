"use client";

import Node from "./Node";
import { cn } from "@/lib/utils";
import { useLinkedListState } from "@/contexts/LinkedList";

const LLCanvas = () => {
  const { linkedList, nodesHighlighted } = useLinkedListState();

  return (
    <div className="flex flex-wrap gap-3">
      <Node value={"Head"} className="bg-purple-600 text-white" />
      {linkedList.map((val, index) => (
        <Node
          key={index}
          value={val}
          className={cn(
            nodesHighlighted.includes(Number(index + 1)) &&
              "border-rose-500 bg-purple-400"
          )}
        />
      ))}
      <Node value={"Null"} className="bg-purple-600 text-white" endNode />
    </div>
  );
};

export default LLCanvas;
