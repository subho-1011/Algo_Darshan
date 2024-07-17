"use client";

import { Slider } from "@/components/ui/slider";
import { useArrayActions, useArrayState } from "@/contexts";

const ArraySizeSlider = () => {
  const { arrayLength } = useArrayState();
  const { setArrayLength } = useArrayActions();

  return (
    <div className="flex gap-3">
      <Slider
        className="w-48"
        min={0}
        max={299}
        value={[arrayLength]}
        onValueChange={(value) => setArrayLength(value[0])}
      />
      <span>{arrayLength}</span>
    </div>
  );
};

export default ArraySizeSlider;
