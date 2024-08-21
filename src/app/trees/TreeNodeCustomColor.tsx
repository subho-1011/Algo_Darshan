"use client";

import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useTreesActions, useTreesState } from "@/contexts";

const TreeNodeCustomColor = () => {
  const { isSingleColor } = useTreesState();
  const { changeColor } = useTreesActions();

  return (
    <div className="absolute right-6 space-y-4 z-20">
      <div className="bg-primary/20 flex rounded-xl p-4">
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
      {!isSingleColor && (
        <div className="bg-primary/20 flex rounded-xl p-4">
          <div className="flex flex-col gap-y-3">
            {/* Root node */}
            <div className="flex items-center gap-2">
              <div className="flex bg-fuchsia-500 border border-fuchsia-800 ring-1 ring-fuchsia-400 rounded-full w-5 h-5" />
              <Label htmlFor="single-color">Root Node</Label>
            </div>
            {/* Left child node */}
            <div className="flex items-center gap-2">
              <div className="flex bg-emerald-500 border border-emerald-800 ring-1 ring-emerald-400 rounded-full w-5 h-5" />
              <Label htmlFor="single-color">Left child</Label>
            </div>
            {/* Right child node */}
            <div className="flex items-center gap-2">
              <div className="flex bg-purple-500 border border-purple-800 ring-1 ring-purple-400 rounded-full w-5 h-5" />
              <Label htmlFor="single-color">Right child</Label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreeNodeCustomColor;
