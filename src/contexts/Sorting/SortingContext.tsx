"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import AlgorithmNames from "@/constants";
import { useRouter } from "next/navigation";
import { delay } from "@/lib/utils";
import { useSpeedState, useArrayActions, useArrayState } from "@/contexts";

const Sortings = AlgorithmNames.Sorting;

type SortingType = (typeof Sortings)[0];

type State = {
  sortNames: SortingType[];
  selectedSort: SortingType;
  isRunning: boolean;
  colorIndexes: number[];
};

type Actions = {
  selectSort: (sortName: string) => void;
  compileSort: () => void;
};

const SortingStateContext = createContext<State | undefined>(undefined);
const SortingActionsContext = createContext<Actions | undefined>(undefined);

const SortingProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSort, setSelectedSort] = useState<SortingType>(Sortings[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [colorIndexes, setColorIndexes] = useState<number[]>([]);

  const router = useRouter();

  const { array } = useArrayState();
  const { speed } = useSpeedState();
  const { setArray } = useArrayActions();

  const changeRunningState = (bool: boolean) => setIsRunning(bool);
  const changeColorIndexes = (indexes: number[]) => setColorIndexes(indexes);

  const executeAlgorithm = () => {
    setIsRunning(true);
    selectedSort.functionName(
      array,
      setArray,
      speed,
      delay,
      changeRunningState,
      changeColorIndexes
    );
  };

  const compileSort = () => executeAlgorithm();

  const selectSort = (sortName: string) => {
    Sortings.map((sort) => {
      if (sort.name === sortName) {
        setSelectedSort(sort);
      }
    });
  };

  useEffect(() => {
    router.push(`/sorting/${selectedSort.slug}`);
  }, [router, selectedSort]);

  return (
    <SortingStateContext.Provider
      value={{ isRunning, sortNames: Sortings, selectedSort, colorIndexes }}
    >
      <SortingActionsContext.Provider value={{ selectSort, compileSort }}>
        {children}
      </SortingActionsContext.Provider>
    </SortingStateContext.Provider>
  );
};

const useSortingState = () => {
  const context = useContext(SortingStateContext);
  if (!context)
    throw new Error("useSortingState must be used within a SortingProvider");
  return context;
};

const useSortingActions = () => {
  const context = useContext(SortingActionsContext);
  if (!context)
    throw new Error("useSortingActions must be used within a SortingProvider");
  return context;
};

export { SortingProvider, useSortingState, useSortingActions };
