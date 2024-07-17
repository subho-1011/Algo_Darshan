"use client";

import { useArrayActions, useSortingActions } from "@/contexts";
import { createContext, useContext, useState } from "react";

type Status = "running" | "finished";

type State = {
  status: Status;
  isRunning: boolean;
  isFinished: boolean;
};

type Actions = {
  setStatus: (status: Status) => void;
  setIsRunning: (status: boolean) => void;
  play: () => void;
  reset: () => void;
};

const SortingStatusStateContext = createContext<State | undefined>(undefined);
const SortingStatusActionsContext = createContext<Actions | undefined>(
  undefined
);

const SortingStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<Status>("finished");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(true);

  const { refreshArray } = useArrayActions();
  const { compileSort } = useSortingActions();

  const play = () => {
    setIsRunning(true);
    setIsFinished(false);
    setStatus("running");
    compileSort();
  };

  const reset = () => {
    setIsRunning(false);
    setIsFinished(true);
    setStatus("finished");
    refreshArray();
  };

  return (
    <SortingStatusStateContext.Provider
      value={{ status, isRunning, isFinished }}
    >
      <SortingStatusActionsContext.Provider
        value={{ setStatus, setIsRunning, play, reset }}
      >
        {children}
      </SortingStatusActionsContext.Provider>
    </SortingStatusStateContext.Provider>
  );
};

const useSortingStatusState = () => {
  const context = useContext(SortingStatusStateContext);
  if (context === undefined)
    throw new Error(
      "useSortingStatusState must be used within a SortingStatusProvider"
    );

  return context;
};
const useSortingStatusActions = () => {
  const context = useContext(SortingStatusActionsContext);
  if (context === undefined)
    throw new Error(
      "useSortingStatusActions must be used within a SortingStatusProvider"
    );

  return context;
};

export {
  SortingStatusProvider,
  useSortingStatusState,
  useSortingStatusActions,
};
