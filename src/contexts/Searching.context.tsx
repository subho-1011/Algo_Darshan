"use client";

import React, { createContext, useState } from "react";
import {
  useArrayActions,
  useArrayState,
  useNoOfElementsState,
  useSpeedState,
} from "@/contexts";
import { generateArray } from "@/lib/utils";

type State = {
  array: number[];
  inputValue: number | "";
  currIndex: number | null;
  resultIndex: number | null;
  isPending: boolean;
  searchingType: "linear" | "binary";
};
type Actions = {
  handleInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  changeSearching: (search: string) => void;
};

const SearchingStateContext = createContext<State | undefined>(undefined);
const SearchingActionsContext = createContext<Actions | undefined>(undefined);

const SearchingProvider = ({ children }: { children: React.ReactNode }) => {
  const { array } = useArrayState();
  const { speed } = useSpeedState();
  const { noOfElements } = useNoOfElementsState();

  const { updateArray } = useArrayActions();

  const [currIndex, setCurrentIndex] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<number | "">("");
  const [isPending, setIsPending] = useState<boolean>(false);
  const [resultIndex, setResultIndex] = useState<number | null>(null);
  const [searchingType, setSearchingType] = useState<"linear" | "binary">(
    "linear"
  );

  // FIXME: sorted array same value
  const sortedArray =
    searchingType === "binary" ? array.sort((a, b) => a - b) : array;
  updateArray(sortedArray);

  const changeSearching = (search: string) => {
    updateArray(generateArray(noOfElements));
    if (search === "binary") {
      let newArray = [...array].sort((a, b) => a - b);
      updateArray(newArray);
    }

    setSearchingType(search as "linear" | "binary");
  };

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value) || "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === "") {
      console.log("Enter input value");
      return;
    }

    runSearching();
    setCurrentIndex(null);
  };

  const runSearching = () => {
    if (searchingType === "linear") {
      linearSearching(Number(inputValue));
    }

    if (searchingType === "binary") {
      binarySearching(Number(inputValue));
    }
  };

  const linearSearching = (value: number) => {
    setIsPending(true);
    setResultIndex(null);

    let found = false;

    const searching = (index: number) => {
      if (index >= array.length) {
        setIsPending(false);
        return;
      }

      setCurrentIndex(index);

      if (array[index] === value) {
        setResultIndex(index);
        setCurrentIndex(null);
        setIsPending(false);
        found = true;
        return;
      }

      setTimeout(() => searching(index + 1), 10000 / speed);
    };

    searching(0);
  };

  const binarySearching = (value: number) => {
    setIsPending(true);
    setResultIndex(null);

    let found = false;

    const searching = (left: number, right: number) => {
      if (left > right) {
        setIsPending(false);
        return;
      }

      const mid = Math.floor((left + right) / 2);
      setCurrentIndex(mid);

      if (array[mid] === value) {
        setResultIndex(mid);
        setCurrentIndex(null);
        setIsPending(false);
        found = true;
        return;
      }

      if (array[mid] < value) {
        setTimeout(() => searching(mid + 1, right), 10000 / speed);
      } else {
        setTimeout(() => searching(left, mid - 1), 10000 / speed);
      }
    };

    searching(0, array.length - 1);
  };

  // change the search type, when binary search is enabled then array sorting

  // Define your state and actions here
  const state: State = {
    array,
    currIndex,
    isPending,
    resultIndex,
    inputValue,
    searchingType,
  };
  const actions: Actions = {
    handleInputValue,
    handleSubmit,
    changeSearching,
  };

  return (
    <SearchingStateContext.Provider value={state}>
      <SearchingActionsContext.Provider value={actions}>
        {children}
      </SearchingActionsContext.Provider>
    </SearchingStateContext.Provider>
  );
};

const useSearchingState = () => {
  const context = React.useContext(SearchingStateContext);
  if (context === undefined) {
    throw new Error("useState must be used within a Provider component");
  }

  return context;
};

const useSearchingActions = () => {
  const context = React.useContext(SearchingActionsContext);
  if (context === undefined) {
    throw new Error("useActions must be used within a Provider component");
  }

  return context;
};

export { SearchingProvider, useSearchingState, useSearchingActions };
