import React from "react";
import { ArrayProvider } from "./ArrayContext";
import { SortingProvider } from "./SortingContext";
import { SortingStatusProvider } from "./SortingStatusContext";
import { SpeedProvider } from "./SpeedContext";

const SortingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ArrayProvider>
      <SpeedProvider>
        <SortingProvider>
          <SortingStatusProvider>{children}</SortingStatusProvider>
        </SortingProvider>
      </SpeedProvider>
    </ArrayProvider>
  );
};

export default SortingContextProvider;
