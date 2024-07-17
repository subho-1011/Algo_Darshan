"use client";

import { Button } from "@/components/ui/button";
import { useSortingState, useSortingStatusActions } from "@/contexts/Sorting";

const PlayButton = () => {
  const { isRunning } = useSortingState();
  const { play, reset } = useSortingStatusActions();

  return (
    <Button className="w-28" onClick={() => (isRunning ? reset() : play())}>
      {isRunning ? "Reset" : "Play"}
    </Button>
  );
};

export default PlayButton;
