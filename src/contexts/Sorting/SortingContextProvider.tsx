import React from "react";
import * as providers from "@/contexts";

const SortingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <providers.SpeedProvider>
      <providers.NoOfElementsProvider>
        <providers.ArrayProvider>
          <providers.SortingProvider>
            <providers.SortingStatusProvider>
              {children}
            </providers.SortingStatusProvider>
          </providers.SortingProvider>
        </providers.ArrayProvider>
      </providers.NoOfElementsProvider>
    </providers.SpeedProvider>
  );
};

export default SortingContextProvider;
