"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useTreesActions, useTreesState } from "@/contexts";
import { Label } from "@/components/ui/label";

const TreeNavbar = () => {
  const { noOfNodes, traversal, speed, randomness, isPending } =
    useTreesState();

  const {
    changeSpeed,
    changeRandomness,
    onTreeSizeChange,
    resetTreeColors,
    generateNewTree,
    changeTraversal,
    startTraversal,
  } = useTreesActions();

  return (
    <div className="flex w-full items-center justify-center bg-primary/20">
      <div className="flex py-4 w-full max-w-7xl justify-between ">
        <div className="flex gap-x-6">
          <div className="flex flex-col items-center gap-3">
            <Label>No of Nodes</Label>
            <Slider
              value={[noOfNodes]}
              min={0}
              max={63}
              onValueChange={([value]) => onTreeSizeChange(value)}
              className="w-48"
              disabled={isPending}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <Label>Traversal speed : {speed}%</Label>
            <Slider
              value={[speed]}
              min={1}
              max={100}
              onValueChange={([value]) => changeSpeed(value)}
              className="w-48"
              disabled={isPending}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <Label>Randomness of tree : {randomness}%</Label>
            <Slider
              value={[randomness]}
              min={1}
              max={100}
              onValueChange={([value]) => changeRandomness(value)}
              className="w-48"
              disabled={isPending}
            />
          </div>
          <Button
            text="Reset Tree"
            onClick={resetTreeColors}
            disabled={isPending}
          />
          <Button
            text="New Tree"
            onClick={generateNewTree}
            disabled={isPending}
          />
        </div>
        <div className="flex gap-x-6">
          <Select
            defaultValue="preOrder"
            value={traversal}
            onValueChange={(value) => changeTraversal(value)}
          >
            <SelectTrigger className="w-60 text-secondary-foreground">
              <SelectValue placeholder="select traversal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preOrder">Preorder Traversal</SelectItem>
              <SelectItem value="inOrder">Inorder Traversal</SelectItem>
              <SelectItem value="postOrder">Postorder Traversal</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={startTraversal} disabled={isPending} text="Start" />
        </div>
      </div>
    </div>
  );
};

export default TreeNavbar;
