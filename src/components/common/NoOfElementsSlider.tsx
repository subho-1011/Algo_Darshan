"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useNoOfElementsActions, useNoOfElementsState } from "@/contexts";

const NoOfElementsSlider = ({
  text = "Size ",
  min = 1,
  max = 100,
  step = 1,
  isPending = false,
}: {
  text?: string;
  min?: number;
  max?: number;
  step?: number;
  isPending?: boolean;
}) => {
  const { noOfElements } = useNoOfElementsState();
  const { changeNoOfElements } = useNoOfElementsActions();

  return (
    <div className="flex gap-x-6">
      <div className="flex flex-col items-center gap-3">
        <Label>
          {text} : {noOfElements}
        </Label>
        <Slider
          value={[noOfElements]}
          min={min}
          max={max}
          step={step}
          onValueChange={([value]) => changeNoOfElements(value)}
          className="w-48"
          disabled={isPending}
        />
      </div>
    </div>
  );
};

export default NoOfElementsSlider;
