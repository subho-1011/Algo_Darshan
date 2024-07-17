"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useSortingActions, useSortingState } from "@/contexts/Sorting";

const SortDropdown = () => {
  const { selectedSort, sortNames } = useSortingState();
  const { selectSort } = useSortingActions();

  return (
    <>
      <Select
        value={selectedSort.name}
        defaultValue={selectedSort.name}
        onValueChange={(value) => selectSort(value)}
      >
        <SelectTrigger className="w-48 text-secondary-foreground">
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
    </>
  );
};

export default SortDropdown;
