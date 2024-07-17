"use client";

import SortDropdown from "./SortDropdown";
import SortingHeaderButtons from "./Buttons";
import SortingHeaderSliders from "./Sliders";

const SortingHeader = () => {
  return (
    <div className="flex w-full h-16 items-center justify-center bg-primary/75 text-primary-foreground">
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-between">
        <SortDropdown />
        <SortingHeaderSliders />
        <SortingHeaderButtons />
      </div>
    </div>
  );
};

export default SortingHeader;
