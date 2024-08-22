"use client";

import React from "react";
import { useNoOfElementsState } from "./NoOfElements.context";
import { generateArray } from "@/lib/utils";

type State = {
  array: number[];
  arrayLength: number;
};

type Actions = {
  updateArray: (array: number[]) => void;
  refreshArray: () => void;
};

const ArrayStateContext = React.createContext<State | undefined>(undefined);
const ArrayActionsContext = React.createContext<Actions | undefined>(undefined);

const ArrayProvider = ({ children }: { children: React.ReactNode }) => {
  const { noOfElements } = useNoOfElementsState();

  const [array, setArray] = React.useState<number[]>([]);

  // update the array
  const updateArray = (array: number[]) => setArray(array);

  // Generate array of given length
  const refreshArray = React.useCallback(() => {
    const newArray = generateArray(noOfElements);
    setArray(newArray);
  }, [noOfElements]);

  // Check if noOfElements has changed, and regenerate array if necessary
  React.useEffect(() => {
    refreshArray();
  }, [refreshArray]);

  return (
    <ArrayStateContext.Provider value={{ array, arrayLength: noOfElements }}>
      <ArrayActionsContext.Provider value={{ updateArray, refreshArray }}>
        {children}
      </ArrayActionsContext.Provider>
    </ArrayStateContext.Provider>
  );
};

const useArrayState = () => {
  const context = React.useContext(ArrayStateContext);
  if (context === undefined) {
    throw new Error("useArrayState must be used within a Provider component");
  }

  return context;
};

const useArrayActions = () => {
  const context = React.useContext(ArrayActionsContext);
  if (context === undefined) {
    throw new Error("useArrayActions must be used within a Provider component");
  }

  return context;
};

export { ArrayProvider, useArrayState, useArrayActions };
