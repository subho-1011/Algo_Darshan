import React from "react";
import { cn } from "@/lib/utils";

type props = {
  height: number | string;
  color?: boolean;
  className?: string;
  arrayLength: number;
};

const Bar: React.FC<props> = ({ height, color, className, arrayLength }) => {
  return (
    <>
      <div
        className={cn("bg-purple-400", { "bg-red-500": color }, className)}
        style={{
          height: `calc(${height}px)`,
          width: `calc(100%/${arrayLength})`,
        }}
      />
    </>
  );
};

export default React.memo(Bar);
