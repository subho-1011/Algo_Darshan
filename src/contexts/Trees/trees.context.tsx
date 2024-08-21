"use client";

import { TTreeNode } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import { generateRandomTree } from "@/utils";
import { useSpeedState } from "@/contexts/Speed.context";
import { useNoOfElementsState } from "../NoOfElements.context";

type TTreeTraversal = "preOrder" | "postOrder" | "inOrder" | "levelOrder";

type state = {
  traversal: string;
  randomness: number;
  isSingleColor: boolean;
  treeRoot: TTreeNode | null;
  isPending: boolean;
};

type actions = {
  changeTraversal: (arg0: string) => void;
  changeRandomness: (arg0: number) => void;
  changeColor: (arg0: boolean) => void;
  resetTreeColors: () => void;
  generateNewTree: () => void;
  startTraversal: () => void;
};

const TreesStateContext = React.createContext<state | undefined>(undefined);
const TreesActionsContext = React.createContext<actions | undefined>(undefined);

const TreesProvider = ({ children }: { children: React.ReactNode }) => {
  const [randomness, setRandomness] = useState<number>(25);
  const [isPending, setIsPending] = useState(false);
  const [treeRoot, setTreeRoot] = useState<TTreeNode | null>(null);
  const [isSingleColor, setIsSingleColor] = useState<boolean>(false);
  const [traversal, setTraversal] = useState<TTreeTraversal>("preOrder");

  const { noOfElements } = useNoOfElementsState();
  const { speed } = useSpeedState();

  // select traversal type
  const changeTraversal = (traversal: string) =>
    setTraversal(traversal as TTreeTraversal);

  // change randomness trees
  const changeRandomness = (n: number) => setRandomness(n);

  // change color trees
  const changeColor = (isSingleColor: boolean) =>
    setIsSingleColor(isSingleColor);

  // reset all nodes colors
  const resetColorOfNode = (node: TTreeNode | null) => {
    if (!node) return;

    node.variant = "primary";
    resetColorOfNode(node.left);
    resetColorOfNode(node.right);

    setTreeRoot({ ...treeRoot! });
  };

  const resetTreeColors = () => resetColorOfNode(treeRoot);

  // new tree generator
  const generateNewTree = useCallback(() => {
    const newTreeRoot = generateRandomTree(noOfElements, randomness);
    setTreeRoot(newTreeRoot);
  }, [noOfElements, randomness]);

  // pre-order traversal
  const preOrderTraversal = (node: TTreeNode | null) => {
    if (!node) return;

    resetTreeColors();
    setIsPending(true);
    const stack: TTreeNode[] = [node];
    const interval = 10000 / (speed * 0.9);

    const intervalId = setInterval(() => {
      if (stack.length === 0) {
        clearInterval(intervalId);
        setIsPending(false);
        return;
      }

      const currNode = stack.pop()!;
      currNode.variant = "current";
      setTreeRoot({ ...treeRoot! });

      if (currNode.right) stack.push(currNode.right);
      if (currNode.left) stack.push(currNode.left);
    }, interval);
  };

  const onPreOrderTraversal = () => preOrderTraversal(treeRoot);

  // post-order traversal
  const postOrderTraversal = (node: TTreeNode | null) => {
    if (!node) return;

    resetTreeColors();
    setIsPending(true);

    const stack: TTreeNode[] = [];
    const visited: Set<TTreeNode> = new Set();
    const interval = 10000 / (speed * 0.9);
    let currNode: TTreeNode | null = node;

    const intervalId = setInterval(() => {
      if (currNode || stack.length) {
        while (currNode) {
          stack.push(currNode);
          currNode = currNode.left;
        }

        currNode = stack[stack.length - 1];

        if (currNode.right && !visited.has(currNode.right)) {
          currNode = currNode.right;
        } else {
          currNode = stack.pop()!;
          currNode.variant = "current";
          setTreeRoot({ ...treeRoot! });
          visited.add(currNode);
          currNode = null;
        }
      } else {
        clearInterval(intervalId);
        setIsPending(false);
      }
    }, interval);
  };

  const onPostOrderTraversal = () => postOrderTraversal(treeRoot);

  // in-order traversal
  const inOrderTraversal = (node: TTreeNode | null) => {
    if (!node) return;

    resetTreeColors();
    setIsPending(true);
    const stack: TTreeNode[] = [];
    const interval = 10000 / (speed * 0.9);
    let currNode: TTreeNode | null = node;

    const intervalId = setInterval(() => {
      if (currNode || stack.length) {
        while (currNode) {
          stack.push(currNode);
          currNode = currNode.left;
        }

        currNode = stack.pop()!;
        currNode.variant = "current";
        setTreeRoot({ ...treeRoot! });

        currNode = currNode.right;
      } else {
        clearInterval(intervalId);
        setIsPending(false);
      }
    }, interval);
  };

  const onInOrderTraversal = () => inOrderTraversal(treeRoot);

  // level order traversal
  const levelOrderTraversal = (node: TTreeNode | null) => {
    if (!node) return;

    resetTreeColors(); // Reset any previous coloring
    setIsPending(true);
    const queue: TTreeNode[] = [node]; // Start with the root node
    const interval = 1000;

    const intervalId = setInterval(() => {
      if (queue.length === 0) {
        clearInterval(intervalId);
        setIsPending(false);
        return;
      }

      const currNode = queue.shift()!; // Dequeue the current node
      currNode.variant = "current"; // Mark as currently visited
      setTreeRoot({ ...treeRoot! }); // Trigger re-render

      // Enqueue the left and right children if they exist
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }, interval);
  };

  const onLevelOrderTraversal = () => levelOrderTraversal(treeRoot);

  const startTraversal = () => {
    switch (traversal) {
      case "preOrder":
        onPreOrderTraversal();
        break;
      case "postOrder":
        onPostOrderTraversal();
        break;
      case "inOrder":
        onInOrderTraversal();
        break;
      case "levelOrder":
        onLevelOrderTraversal();
        break;
      default:
        console.error(`Invalid traversal type: ${traversal}`);
        break;
    }
  };

  // after completion of traversal reset colors

  useEffect(() => {
    generateNewTree();
  }, [generateNewTree]);

  const state: state = {
    traversal,
    randomness,
    isSingleColor,
    treeRoot,
    isPending,
  };

  const actions: actions = {
    changeTraversal,
    changeRandomness,
    changeColor,
    resetTreeColors,
    generateNewTree,
    startTraversal,
  };

  return (
    <TreesStateContext.Provider value={state}>
      <TreesActionsContext.Provider value={actions}>
        {children}
      </TreesActionsContext.Provider>
    </TreesStateContext.Provider>
  );
};

const useTreesState = () => {
  const context = React.useContext(TreesStateContext);

  if (context === undefined)
    throw new Error("useTreesState must be used within a TreesProvider");
  return context;
};

const useTreesActions = () => {
  const context = React.useContext(TreesActionsContext);

  if (context === undefined)
    throw new Error("useTreesActions must be used within a TreesProvider");
  return context;
};

export { TreesProvider, useTreesState, useTreesActions };
