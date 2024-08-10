"use client";

import Tower from "./Tower";
import { Button } from "@/components/ui/button";
import { useTowerOfHanoiActions, useTowerOfHanoiState } from "@/contexts";

const TowersCanvas = () => {
  const { steps, currentStep } = useTowerOfHanoiState();
  const { undoMove, redoMove, addDisk } = useTowerOfHanoiActions();

  if (!steps || steps.length === 0 || !steps[currentStep]) {
    return <div>Loading...</div>; // Handle the case when steps are not yet initialized
  }

  const [source, destiny, auxiliary] = steps[currentStep];

  return (
    <>
      <div className="flex w-full justify-between h-[60vh] gap-3">
        <Tower arr={source} name="Source" />
        <Tower arr={destiny} name="Destiny" />
        <Tower arr={auxiliary} name="Auxiliary" />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        <Button onClick={undoMove} disabled={currentStep === 0}>
          Previous
        </Button>
        <Button onClick={redoMove} disabled={currentStep >= steps.length - 1}>
          Next
        </Button>
        <Button onClick={addDisk}>Add Disk</Button>
      </div>
    </>
  );
};

export default TowersCanvas;
