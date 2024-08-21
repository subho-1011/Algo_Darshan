"use client";

import React from "react";

type State = {
  speed: number;
};

type Actions = {
  changeSpeed: (arg0: number) => void;
};

const SpeedStateContext = React.createContext<State | undefined>(undefined);
const SpeedActionsContext = React.createContext<Actions | undefined>(undefined);

const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = React.useState<number>(50);

  const changeSpeed = (speed: number) => setSpeed(speed);

  return (
    <SpeedStateContext.Provider value={{ speed }}>
      <SpeedActionsContext.Provider value={{ changeSpeed }}>
        {children}
      </SpeedActionsContext.Provider>
    </SpeedStateContext.Provider>
  );
};

const useSpeedState = () => {
  const context = React.useContext(SpeedStateContext);
  if (context === undefined) {
    throw new Error("useSpeedState must be used within a Provider component");
  }

  return context;
};

const useSpeedActions = () => {
  const context = React.useContext(SpeedActionsContext);
  if (context === undefined) {
    throw new Error("useSpeedActions must be used within a Provider component");
  }

  return context;
};

export { SpeedProvider, useSpeedState, useSpeedActions };
