import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Node = ({
  value,
  endNode,
  className,
}: {
  value: number | string;
  endNode?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-30 h-10 justify-between items-center")}>
      <div
        className={cn(
          "flex w-20 h-10 rounded-xl items-center justify-center border-2 border-purple-600",
          className
        )}
      >
        {value}
      </div>
      {!endNode ? (
        <LiaLongArrowAltRightSolid size={40} className="text-purple-800" />
      ) : null}
    </div>
  );
};

export default React.memo(Node);
