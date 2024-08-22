"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useNoOfElementsActions, useNoOfElementsState } from "@/contexts";
import { SliderProps } from "@radix-ui/react-slider";

interface NoOfElementsSliderProps extends SliderProps {
  text?: string;
}

const NoOfElementsSlider = ({
  text = "Size ",
  ...sliderProps
}: NoOfElementsSliderProps) => {
  const { noOfElements } = useNoOfElementsState();
  const { changeNoOfElements } = useNoOfElementsActions();

  return (
    <div className="flex gap-x-6">
      <div className="flex flex-col items-center gap-3">
        <Label>
          {text} : {noOfElements}
        </Label>
        <Slider
          defaultValue={[]}
          value={[noOfElements]}
          onValueChange={([value]) => changeNoOfElements(value)}
          className="w-48"
          {...sliderProps}
        />
      </div>
    </div>
  );
};

export default NoOfElementsSlider;
