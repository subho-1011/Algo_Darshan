import Bar from "./Bar";
import { customHeightMapper } from "@/utils";
import { useArrayState, useSortingState } from "@/contexts";

const ArrayCanvas = ({ array }: { array: number[] }) => {
  const { arrayLength } = useArrayState();
  const { colorIndexes } = useSortingState();

  return (
    <div className="flex w-full gap-0.5">
      {array.map((value, index) => (
        <>
          {colorIndexes.includes(index) ? (
            <Bar
              key={index}
              arrayLength={arrayLength}
              height={customHeightMapper(value, arrayLength)}
              color
            />
          ) : (
            <Bar
              key={index}
              arrayLength={arrayLength}
              height={customHeightMapper(value, arrayLength)}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default ArrayCanvas;
