"use client";

import { TToworOfHanoiDisk } from "@/types";
import colors from "@/constants/colors";
import React, { createContext, useEffect, useState, useCallback } from "react";
import { solveTowerOfHanoi } from "@/algorithms/backtracking";

type Disks = TToworOfHanoiDisk[];

type TStep = [
  source: TToworOfHanoiDisk[],
  destiny: TToworOfHanoiDisk[],
  auxiliary: TToworOfHanoiDisk[]
];

type State = {
  noOfDisks: number;
  steps: TToworOfHanoiDisk[][][];
  currentStep: number;
};

type Actions = {
  reset: () => void;
  undoMove: () => void;
  redoMove: () => void;
  addDisk: () => void;
  removeDisk: () => void;
};

const initialTower = (n: number) => {
  let disks: Disks = [];
  for (let i = 0; i < n; i++) {
    disks.push({
      id: i + 1,
      width: i * 40 + 40,
      backgroundColor: colors[i % colors.length].hex,
    });
  }

  return disks;
};

const TowerOfHanoiState = createContext<State | undefined>(undefined);
const TowerOfHanoiActions = createContext<Actions | undefined>(undefined);

const INITIAL_NO_OF_DISKS = 3;

const TowerOfHanoiProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [noOfDisks, setNoOfDisks] = useState<number>(INITIAL_NO_OF_DISKS);
  const initialDisks = () => initialTower(noOfDisks);
  const [steps, setSteps] = useState<TToworOfHanoiDisk[][][]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const solveAndStoreSteps = useCallback(() => {
    setSteps([[[...initialDisks()], [], []]]);
    setCurrentStep(0);
    const ans = solveTowerOfHanoi(noOfDisks, [...initialDisks()]);
    console.log(ans);

    setSteps((prev) => [...prev, ...ans]);
  }, [noOfDisks, solveTowerOfHanoi]);

  useEffect(() => {
    solveAndStoreSteps();
  }, [noOfDisks, solveAndStoreSteps]);
  // console.log(steps);

  const reset = () => {
    setNoOfDisks(INITIAL_NO_OF_DISKS);
    solveAndStoreSteps();
  };

  const undoMove = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const redoMove = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const addDisk = () => {
    setNoOfDisks((prev) => prev + 1);
  };

  const removeDisk = () => {
    if (noOfDisks > 1) {
      setNoOfDisks((prev) => prev - 1);
    }
  };

  const state: State = {
    noOfDisks,
    steps,
    currentStep,
  };

  const actions: Actions = {
    reset,
    undoMove,
    redoMove,
    addDisk,
    removeDisk,
  };

  return (
    <TowerOfHanoiState.Provider value={state}>
      <TowerOfHanoiActions.Provider value={actions}>
        {children}
      </TowerOfHanoiActions.Provider>
    </TowerOfHanoiState.Provider>
  );
};

const useTowerOfHanoiState = () => {
  const context = React.useContext(TowerOfHanoiState);
  if (!context) {
    throw new Error(
      "useTowerOfHanoiState must be used within a TowerOfHanoiProvider"
    );
  }
  return context;
};

const useTowerOfHanoiActions = () => {
  const context = React.useContext(TowerOfHanoiActions);
  if (!context) {
    throw new Error(
      "useTowerOfHanoiActions must be used within a TowerOfHanoiProvider"
    );
  }
  return context;
};

export { TowerOfHanoiProvider, useTowerOfHanoiState, useTowerOfHanoiActions };
