"use client";

import React, { createContext, useContext, useState } from "react";

type State = {
  speed: number;
};

type Actions = {
  changeSpeed: (arg0: number) => void;
};

const SpeedStateContext = createContext<State | undefined>(undefined);
const SpeedActionsContext = createContext<Actions | undefined>(undefined);

const INITIAL_SPEED = 50;

const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, changeSpeed] = useState<number>(INITIAL_SPEED);

  return (
    <SpeedStateContext.Provider value={{ speed }}>
      <SpeedActionsContext.Provider value={{ changeSpeed }}>
        {children}
      </SpeedActionsContext.Provider>
    </SpeedStateContext.Provider>
  );
};

const useSpeedState = () => {
  const context = useContext(SpeedStateContext);
  if (context === undefined)
    throw new Error("useSpeedState must be used within an SpeedProvider");

  return context;
};
const useSpeedActions = () => {
  const context = useContext(SpeedActionsContext);
  if (context === undefined)
    throw new Error("useSpeedActions must be used within an SpeedProvider");

  return context;
};

export { SpeedProvider, useSpeedState, useSpeedActions };
