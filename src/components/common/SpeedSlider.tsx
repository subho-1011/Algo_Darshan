"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useSpeedActions, useSpeedState } from "@/contexts";

const SpeedSlider = ({
  text = "Speed",
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
          min={min}
          max={max}
          step={step}
          onValueChange={([value]) => changeSpeed(value)}
          className="w-48"
          disabled={isPending}
        />
      </div>
    </div>
  );
};

export default SpeedSlider;
