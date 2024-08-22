export * from "./Sorting";
export * from "./ArrayContext";
export * from "./Backtracking";
export * from "./Trees";

import { SpeedProvider, useSpeedState, useSpeedActions } from "./Speed.context";
import {
  NoOfElementsProvider,
  useNoOfElementsState,
  useNoOfElementsActions,
} from "./NoOfElements.context";
import { ArrayProvider, useArrayState, useArrayActions } from "./Array.context";
import {
  SearchingProvider,
  useSearchingState,
  useSearchingActions,
} from "./Searching.context";

export {
  SpeedProvider,
  NoOfElementsProvider,
  ArrayProvider,
  SearchingProvider,
};

export {
  useSpeedState,
  useSpeedActions,
  useNoOfElementsState,
  useNoOfElementsActions,
  useArrayState,
  useArrayActions,
  useSearchingState,
  useSearchingActions,
};
