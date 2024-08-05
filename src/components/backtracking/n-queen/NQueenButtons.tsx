"use client";

import { Undo2Icon } from "lucide-react";
import { useNQueenActions } from "@/contexts";
import { Button } from "@/components/ui/button";

const NQueenButtons = () => {
  const { resetGame, startGame, undoQueenPosition } = useNQueenActions();

  return (
    <div className="flex justify-between gap-4">
      <div className="flex w-full items-center justify-between">
        <Button onClick={resetGame}>Reset Game</Button>
        {/* <Button onClick={startGame}>Start Game</Button> */}
        <Button variant="outline" size="icon" onClick={undoQueenPosition}>
          <Undo2Icon className="text-purple-800" />
        </Button>
      </div>
    </div>
  );
};

export default NQueenButtons;
