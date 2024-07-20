"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import AlgorithmNames from "@/constants";
import { useRouter } from "next/navigation";
import { slugify } from "@/utils";

type AlgorithmNameType = keyof typeof AlgorithmNames;

type State = {
  algorithmName: AlgorithmNameType;
  algorithmNames: string[];
};

type Actions = {
  selectAlgorithm: (algorithmName: AlgorithmNameType) => void;
};

const AlgorithmStateContext = createContext<State | undefined>(undefined);
const AlgorithmActionsContext = createContext<Actions | undefined>(undefined);

const AlgorithmProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const algorithmNames = Object.keys(AlgorithmNames);
  const [algorithmName, setAlgorithmName] =
    useState<AlgorithmNameType>("Sorting");

  const selectAlgorithm = (algorithmName: AlgorithmNameType) => {
    setAlgorithmName(algorithmName);
    // router.push(`/${algorithmName.toLowerCase()}`);
  };

  useEffect(() => {
    // router.push(`/${slugify(algorithmName)}`); TODO: remove this later
  }, [algorithmName, router]);

  return (
    <AlgorithmStateContext.Provider value={{ algorithmName, algorithmNames }}>
      <AlgorithmActionsContext.Provider value={{ selectAlgorithm }}>
        {children}
      </AlgorithmActionsContext.Provider>
    </AlgorithmStateContext.Provider>
  );
};

const useAlgorithmState = () => {
  const context = useContext(AlgorithmStateContext);
  if (!context)
    throw new Error(
      "useAlgorithmState must be used within an AlgorithmProvider"
    );

  return context;
};

const useAlgorithmActions = () => {
  const context = useContext(AlgorithmActionsContext);
  if (!context)
    throw new Error(
      "useAlgorithmActions must be used within an AlgorithmProvider"
    );

  return context;
};

export { AlgorithmProvider, useAlgorithmState, useAlgorithmActions };
