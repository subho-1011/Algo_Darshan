"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import Sortings from "@/constants/sortings";
import { delay } from "@/lib/utils";
import {
  useSpeedState,
  useArrayActions,
  useArrayState,
  useNoOfElementsActions,
} from "@/contexts";

type SortingType = (typeof Sortings)[0];

type State = {
  array: number[];
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

const INTIAL_NO_OF_ELEMENTS = 50;

const SortingProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSort, setSelectedSort] = useState<SortingType>(Sortings[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [colorIndexes, setColorIndexes] = useState<number[]>([]);

  const { array } = useArrayState();
  const { speed } = useSpeedState();
  const { updateArray } = useArrayActions();
  const { changeNoOfElements } = useNoOfElementsActions();

  const changeRunningState = (bool: boolean) => setIsRunning(bool);
  const changeColorIndexes = (indexes: number[]) => setColorIndexes(indexes);

  const executeAlgorithm = () => {
    setIsRunning(true);
    selectedSort.functionName(
      array,
      updateArray,
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
    changeNoOfElements(INTIAL_NO_OF_ELEMENTS);
  }, []);

  return (
    <SortingStateContext.Provider
      value={{
        array,
        isRunning,
        sortNames: Sortings,
        selectedSort,
        colorIndexes,
      }}
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
