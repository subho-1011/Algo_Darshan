"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { NoOfElementsSlider, SpeedSlider } from "@/components/common";

import {
  useArrayActions,
  useSortingActions,
  useSortingState,
  useSortingStatusActions,
} from "@/contexts";

const SortingHeader = () => {
  const { isRunning, selectedSort, sortNames } = useSortingState();
  const { play, reset } = useSortingStatusActions();
  const { refreshArray } = useArrayActions();
  const { selectSort } = useSortingActions();

  return (
    <div className="flex w-full py-3 items-center justify-center bg-primary/20 ">
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between">
        <div className="flex gap-x-8">
          <NoOfElementsSlider text="Array length " max={299} />
          <SpeedSlider />
        </div>
        <div className="flex gap-x-6">
          <Button
            className="w-28"
            onClick={() => (isRunning ? reset() : play())}
            text={isRunning ? "Reset" : "Play"}
          />
          <Button className="w-28" onClick={refreshArray} text="Randomize" />
        </div>
        <Select
          value={selectedSort.name}
          defaultValue={selectedSort.name}
          onValueChange={(value) => selectSort(value)}
        >
          <SelectTrigger className="w-60 text-secondary-foreground">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortNames.map((sort) => (
              <SelectItem key={sort.key} value={sort.name}>
                <span>{sort.name}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SortingHeader;
