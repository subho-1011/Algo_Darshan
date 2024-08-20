"use client";

import { TTreeNode } from "@/types";
import React, { useCallback, useEffect, useState } from "react";
import { generateRandomTree } from "@/utils";

type TTreeTraversal = "preOrder" | "postOrder" | "inOrder";

type state = {
  noOfNodes: number;
  traversal: string;
  speed: number;
  randomness: number;
  isSingleColor: boolean;
  treeRoot: TTreeNode | null;
  isPending: boolean;
};

type actions = {
  onTreeSizeChange: (arg0: number) => void;
  changeTraversal: (arg0: string) => void;
  changeSpeed: (arg0: number) => void;
  changeRandomness: (arg0: number) => void;
  changeColor: (arg0: boolean) => void;
  resetTreeColors: () => void;
  generateNewTree: () => void;
  startTraversal: () => void;
};

const TreesStateContext = React.createContext<state | undefined>(undefined);
const TreesActionsContext = React.createContext<actions | undefined>(undefined);

const INITIAL_NO_OF_TREE_NODES = 13;

const TreesProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<number>(50);
  const [randomness, setRandomness] = useState<number>(25);
  const [isPending, setIsPending] = useState(false);
  const [treeRoot, setTreeRoot] = useState<TTreeNode | null>(null);
  const [isSingleColor, setIsSingleColor] = useState<boolean>(false);
  const [traversal, setTraversal] = useState<TTreeTraversal>("preOrder");
  const [noOfNodes, setNoOfNodes] = useState<number>(INITIAL_NO_OF_TREE_NODES);

  //   no of nodes changed by slider
  const onTreeSizeChange = (n: number) => setNoOfNodes(n);

  // select traversal type
  const changeTraversal = (traversal: string) =>
    setTraversal(traversal as TTreeTraversal);

  // change traversal speed
  const changeSpeed = (n: number) => setSpeed(n);

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
    const newTreeRoot = generateRandomTree(noOfNodes, randomness);
    setTreeRoot(newTreeRoot);
  }, [noOfNodes, randomness]);

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
      default:
        console.error(`Invalid traversal type: ${traversal}`);
        break;
    }
  };

  // initialize no of nodes and array
  useEffect(() => {
    setNoOfNodes(INITIAL_NO_OF_TREE_NODES);
  }, []);

  useEffect(() => {
    generateNewTree();
  }, [generateNewTree]);

  const state: state = {
    noOfNodes,
    traversal,
    speed,
    randomness,
    isSingleColor,
    treeRoot,
    isPending,
  };

  const actions: actions = {
    onTreeSizeChange,
    changeTraversal,
    changeSpeed,
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
