"use client";

import React from "react";

type State = {
  noOfElements: number;
};

type Actions = {
  changeNoOfElements: (arg0: number) => void;
};

const NoOfElementsStateContext = React.createContext<State | undefined>(
  undefined
);
const NoOfElementsActionsContext = React.createContext<Actions | undefined>(
  undefined
);

const NoOfElementsProvider = ({ children }: { children: React.ReactNode }) => {
  const [noOfElements, setNoOfElements] = React.useState<number>(20);

  const changeNoOfElements = (noOfElements: number) =>
    setNoOfElements(noOfElements);

  return (
    <NoOfElementsStateContext.Provider value={{ noOfElements }}>
      <NoOfElementsActionsContext.Provider value={{ changeNoOfElements }}>
        {children}
      </NoOfElementsActionsContext.Provider>
    </NoOfElementsStateContext.Provider>
  );
};

const useNoOfElementsState = () => {
  const context = React.useContext(NoOfElementsStateContext);
  if (context === undefined) {
    throw new Error(
      "useNoOfElementsState must be used within a Provider component"
    );
  }

  return context;
};

const useNoOfElementsActions = () => {
  const context = React.useContext(NoOfElementsActionsContext);
  if (context === undefined) {
    throw new Error(
      "useNoOfElementsActions must be used within a Provider component"
    );
  }

  return context;
};

export { NoOfElementsProvider, useNoOfElementsState, useNoOfElementsActions };
