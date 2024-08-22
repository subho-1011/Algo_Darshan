"use client";

import { solveSudokuSteps } from "@/algorithms/backtracking/sudokuSolve";
import { getNewSudoku } from "@/services/sudoku.services";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export type SudokuCell = {
  value: number;
  state: "initial" | "filled" | "backtracked" | "empty";
};

type SudokuStateContext = {
  array: SudokuCell[][];
  size: number;
  success: string;
};

type SudokuActionsContext = {
  genarateNewSudoku: () => void;
  solveTheSudoku: () => void;
};

const getSudokuArray = async () => {
  const response = await axios.get("https://sudoku-api.vercel.app/api/dosuku");
  console.log(response);

  const data = response.data;
  const res = data.newboard.grids[0].value;

  return res;
};

const SudokuStateContext = createContext<SudokuStateContext | undefined>(
  undefined
);
const SudokuActionsContext = createContext<SudokuActionsContext | undefined>(
  undefined
);

const SIZE = 9;

const SudokuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [array, setArray] = useState<SudokuCell[][]>([]);
  const [steps, setSteps] = useState<SudokuCell[][][]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    genarateNewSudoku();
    getNewSudoku();
  }, []);

  const genarateNewSudoku = async () => {
    // const res = (await getSudokuArray()) as number[][];
    // const initialArray: SudokuCell[][] = res.map((row) =>
    //   row.map((value) => ({
    //     value,
    //     state: value === 0 ? "empty" : "initial",
    //   }))
    // );
    // setArray(initialArray);
    setArray([]);
  };

  useEffect(() => {
    if (steps.length > 0 && currentStep < steps.length) {
      const timeout = setTimeout(() => {
        setArray(steps[currentStep]);
        setCurrentStep((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [steps, currentStep]);

  const updateSudoku = (arr: SudokuCell[][]) => setArray([...arr]);

  const solveTheSudoku = () => {
    if (success) setSuccess("");
    const initialBoard = JSON.parse(JSON.stringify(array));

    const steps = solveSudokuSteps(initialBoard);
    steps.forEach((step, index) => {
      setTimeout(() => {
        setSteps((prev) => [...prev, step]);
      }, 200 * index);
    });
  };

  return (
    <SudokuStateContext.Provider value={{ array, size: SIZE, success }}>
      <SudokuActionsContext.Provider
        value={{ genarateNewSudoku, solveTheSudoku }}
      >
        {children}
      </SudokuActionsContext.Provider>
    </SudokuStateContext.Provider>
  );
};

export const useSudokuState = () => {
  const context = useContext(SudokuStateContext);

  if (!context) {
    throw new Error("useSudokuState must be used within SudokuProvider");
  }
  return context;
};

export const useSudokuActions = () => {
  const context = useContext(SudokuActionsContext);

  if (!context) {
    throw new Error("useSudokuActions must be used within SudokuProvider");
  }
  return context;
};

export default SudokuProvider;
