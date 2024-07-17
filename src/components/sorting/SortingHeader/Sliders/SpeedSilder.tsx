"use client";

import { Slider } from "@/components/ui/slider";

import { useSpeedActions, useSpeedState } from "@/contexts/Sorting";

const SpeedSlider = () => {
  const { speed } = useSpeedState();
  const { changeSpeed } = useSpeedActions();

  return (
    <div className="flex gap-3">
      <Slider
        className="w-48"
        min={1}
        max={100}
        value={[speed]}
        onValueChange={(value) => changeSpeed(value[0])}
      />
      <span>{speed}</span>
    </div>
  );
};

export default SpeedSlider;
