"use client";

import { Button } from "@/components/ui/button";
import { useArrayActions } from "@/contexts";

const RandomizeButton = () => {
  const onClickRandomize = () => {};
  const { refreshArray } = useArrayActions();

  return (
    <Button className="w-28" onClick={refreshArray}>
      <span>Randomize</span>
    </Button>
  );
};

export default RandomizeButton;
