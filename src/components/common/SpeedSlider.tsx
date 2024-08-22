"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useSpeedActions, useSpeedState } from "@/contexts";
import { SliderProps } from "@radix-ui/react-slider";

interface SpeedSliderProps extends SliderProps {
  text?: string;
}

const SpeedSlider = ({ text = "Speed", ...sliderProps }: SpeedSliderProps) => {
  const { speed } = useSpeedState();
  const { changeSpeed } = useSpeedActions();

  return (
    <div className="flex gap-x-6">
      <div className="flex flex-col items-center gap-3">
        <Label>
          {text} : {speed}
        </Label>
        <Slider
          value={[speed]}
          onValueChange={([value]) => changeSpeed(value)}
          className="w-48"
          {...sliderProps}
        />
      </div>
    </div>
  );
};

export default SpeedSlider;
