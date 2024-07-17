"use client";

import { generateArrayOfLength } from "@/utils";
import React, { createContext, useEffect, useState } from "react";

type State = {
  array: number[];
  arrayLength: number;
};

type Actions = {
  refreshArray: () => void;
  setArray: (array: number[]) => void;
  setArrayLength: (arg0: number) => void;
};

const ArrayStateContext = createContext<State | undefined>(undefined);
const ArrayActionsContext = createContext<Actions | undefined>(undefined);

const INITIAL_LENGTH = 40;
const INITIAL_ARRAY = generateArrayOfLength(INITIAL_LENGTH);

const ArrayProvider = ({ children }: { children: React.ReactNode }) => {
  const [array, setArray] = useState<number[]>(INITIAL_ARRAY);
  const [arrayLength, setArrayLength] = useState<number>(INITIAL_LENGTH);

  const generateArray = (length: number) => generateArrayOfLength(length);
  const refreshArray = () => setArray(generateArray(arrayLength));

  useEffect(() => {
    // refreshArray();
    setArray(generateArray(arrayLength));
  }, [arrayLength]);

  return (
    <ArrayStateContext.Provider value={{ array, arrayLength }}>
      <ArrayActionsContext.Provider
        value={{ setArray, setArrayLength, refreshArray }}
      >
        {children}
      </ArrayActionsContext.Provider>
    </ArrayStateContext.Provider>
  );
};

const useArrayState = () => {
  const context = React.useContext(ArrayStateContext);
  if (context === undefined)
    throw new Error("useArrayState must be used within an ArrayProvider");

  return context;
};

const useArrayActions = () => {
  const context = React.useContext(ArrayActionsContext);
  if (context === undefined)
    throw new Error("useArrayActions must be used within an ArrayProvider");

  return context;
};

export { ArrayProvider, useArrayState, useArrayActions };
