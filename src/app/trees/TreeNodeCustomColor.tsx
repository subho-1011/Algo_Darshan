"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useTreesActions, useTreesState } from "@/contexts";

const TreeNodeCustomColor = () => {
  const { isSingleColor } = useTreesState();
  const { changeColor } = useTreesActions();

  return (
    <div className="absolute right-6 bg-primary/20 flex rounded-xl p-4">
      <div className="flex flex-col gap-y-3">
        {/* Checkbox for single color */}
        <div className="flex items-center gap-2">
          <Checkbox
            className="w-5 h-5"
            checked={isSingleColor}
            onCheckedChange={(checked: boolean) => changeColor(checked)}
          />
          <Label htmlFor="single-color">Single color</Label>
        </div>

        {/* Checkbox for multiple colors */}
        <div className="flex items-center gap-2">
          <Checkbox
            className="w-5 h-5"
            checked={!isSingleColor}
            onCheckedChange={(checked) => changeColor(!checked)}
          />
          <Label htmlFor="multiple-color">Multiple colors</Label>
        </div>
      </div>
    </div>
  );
};

export default TreeNodeCustomColor;
