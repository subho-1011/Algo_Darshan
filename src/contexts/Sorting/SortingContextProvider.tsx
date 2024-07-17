import React from "react";
import * as providers from "@/contexts";

const SortingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <providers.ArrayProvider>
      <providers.SpeedProvider>
        <providers.SortingProvider>
          <providers.SortingStatusProvider>
            {children}
          </providers.SortingStatusProvider>
        </providers.SortingProvider>
      </providers.SpeedProvider>
    </providers.ArrayProvider>
  );
};

export default SortingContextProvider;
