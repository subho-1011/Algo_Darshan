"use client";

import { NoOfElementsSlider, SpeedSlider } from "@/components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchingActions, useSearchingState } from "@/contexts";

const SearchingNavbar = () => {
  const { isPending, searchingType } = useSearchingState();
  const { changeSearching } = useSearchingActions();

  return (
    <div className="flex w-full items-center justify-center bg-primary/20">
      <div className="flex py-4 w-full max-w-7xl justify-between">
        <div className="flex gap-x-8">
          <SpeedSlider disabled={isPending} />
          <NoOfElementsSlider disabled={isPending} />
        </div>
        <Select
          defaultValue="linear"
          value={searchingType}
          onValueChange={(value) => changeSearching(value)}
          disabled={isPending}
        >
          <SelectTrigger className="w-60 text-secondary-foreground">
            <SelectValue placeholder="select searching" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="linear">Linear Search</SelectItem>
            <SelectItem value="binary">Binary Search</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchingNavbar;
