import { useWindowSize } from "@/hooks";
import { cn } from "@/lib/utils";

export const ArrayVisualizer = ({
  array,
  className,
}: {
  array: number[];
  className?: string;
}) => {
  const size = useWindowSize();
  const maxHeight = (size[1] * 70) / 100;

  return (
    <>
      {array.length > 0
        ? array.map((value, index) => (
            <div
              key={index}
              className={cn(
                "flex bg-purple-500 rotate-180 justify-center items-end",
                className
              )}
              style={{
                height: `calc(${value}px * 4)`,
                width: `calc(100%/${array.length})`,
              }}
            >
              {array.length < 40 ? <>{value}</> : null}
            </div>
          ))
        : null}
    </>
  );
};
