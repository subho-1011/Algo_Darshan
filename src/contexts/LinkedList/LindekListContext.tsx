"use client";

import { useToast } from "@/components/ui/use-toast";
import { generateArray } from "@/lib/utils";
import React, { createContext, useContext, useEffect, useState } from "react";

type State = {
  linkedList: number[];
  linkedListSize: number;
  nodesHighlighted: number[];
};

type Actions = {
  refreshLinkedList: () => void;
  insertAtHeadNode: (value: number) => void;
  insertNodeAtIndex: (value: number, position: number) => void;
  insertNodeAtLastIndex: (value?: number) => void;
  addNewNode: (val?: number, position?: number) => void;
  searchNodeByValue: (val: number) => void;
  updateNode: (position: number, value: number) => void;
  deleteNodeAtHead: () => void;
  deleteNodeAtPosition: (position: number) => void;
  deleteNode: () => void;
  deleteAllNodes: () => void;
};

const LinkedListStateContext = createContext<State | undefined>(undefined);
const LinkedListActionsContext = createContext<Actions | undefined>(undefined);

const INITIAL_ARRAY_LENGTH = 5;
const randomNumber = Math.floor(Math.random() * 100 + 1);

const LinkedListProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [linkedList, setLinkedList] = useState<number[]>([]);
  const [linkedListSize, setLinkedListSize] =
    useState<number>(INITIAL_ARRAY_LENGTH);
  const [nodesHighlighted, setNodesHighlighted] = useState<number[]>([]);

  // Initialize the list
  useEffect(() => {
    setLinkedList(generateArray(linkedListSize));
  }, []);

  //  generate a new list
  const refreshLinkedList = () => {
    setLinkedList(generateArray(INITIAL_ARRAY_LENGTH));
    setLinkedListSize(INITIAL_ARRAY_LENGTH);
  };

  // insert at head node of list
  const insertAtHeadNode = (value: number) => {
    setLinkedList([value, ...linkedList]);
    setLinkedListSize((prevsize) => prevsize + 1);

    toast({
      title: "Node Inserted",
      description: `Node ${value} inserted at head`,
      variant: "success",
    });
  };

  // insert at given index of list
  const insertNodeAtIndex = (value: number, position: number) => {
    if (position < 0 || position > linkedListSize) {
      toast({
        title: "Invalid Position",
        description: `Position should be between 1 and ${linkedListSize}`,
        variant: "destructive",
      });
    }

    const newLinkedList = [...linkedList];
    newLinkedList.splice(position - 1, 0, value);
    setLinkedList(newLinkedList);
    setLinkedListSize((prevSize) => prevSize + 1);

    toast({
      title: "Node Inserted",
      description: `Node ${value} inserted at position ${position}`,
      variant: "success",
    });
  };

  // insert at last index of list
  const insertNodeAtLastIndex = (value?: number) => {
    if (value === undefined) {
      setLinkedList([...linkedList, randomNumber]);
    } else setLinkedList([...linkedList, value]);

    setLinkedListSize((prevSize) => prevSize + 1);
    toast({
      title: "Node Inserted",
      description: `Node ${value ?? randomNumber} inserted at the end`,
      variant: "success",
    });
  };

  // add new node to linked list
  const addNewNode = (value?: number, position?: number) => {
    if (position === undefined) {
      insertNodeAtLastIndex(value);
    } else {
      insertNodeAtIndex(value ?? randomNumber, position);
    }
  };

  // search node by value
  const searchNodeByValue = (val: number) => {
    const position = linkedList.indexOf(val);
    if (position !== -1) {
      toast({
        title: `${val} found at position ${position + 1}`,
        variant: "success",
      });
      return;
    }

    toast({
      variant: "destructive",
      description: `${val} not found in linked list`,
    });
  };

  // Update value of given position in linked list
  const updateNode = (position: number, value: number) => {
    if (position < 0 || position >= linkedListSize) {
      toast({
        title: "Invalid Position",
        description: `Position should be between 1 and ${linkedListSize}`,
        variant: "destructive",
      });
      console.log("Invalid position to update node");
      return;
    }

    const newLinkedList = [...linkedList];
    newLinkedList[position - 1] = value;
    setLinkedList(newLinkedList);
    toast({
      title: "Node Updated",
      description: `Node at position ${position} updated to ${value}`,
      variant: "success",
    });
  };

  // delete head from linked list
  const deleteNodeAtHead = () => {
    if (!linkedList.length) {
      console.log("Cannot delete from an empty linked list");
      return;
    }

    setLinkedList([...linkedList.slice(1)]);
    setLinkedListSize((prevSize) => prevSize - 1);
    toast({
      title: "Node Deleted",
      description: "Node at head deleted",
      variant: "destructive",
    });
  };

  // delete node at given position
  const deleteNodeAtPosition = (position: number) => {
    if (position < 0 || position >= linkedListSize) {
      toast({
        title: "Invalid Position",
        description: `Position should be between 1 and ${linkedListSize}`,
        variant: "destructive",
      });

      return;
    }

    const newLinkedList = linkedList.filter(
      (_, index) => index !== position - 1
    );
    setLinkedList(newLinkedList);
    setLinkedListSize((prevSize) => prevSize - 1);
    toast({
      title: "Node Deleted",
      description: `Node at position ${position} deleted`,
      variant: "destructive",
    });
  };

  // delete last node from linked list
  const deleteLastNode = () => {
    if (linkedList.length === 0) {
      toast({ variant: "destructive", description: "List is empty" });
      return;
    }

    setLinkedList(linkedList.slice(0, -1));
    setLinkedListSize((prevSize) => prevSize - 1);
    toast({
      title: "Node Deleted",
      description: "Node at the end deleted",
      variant: "destructive",
    });
  };

  const deleteNode = () => deleteLastNode();

  const deleteAllNodes = () => {
    setLinkedList([]);
    setLinkedListSize(0);
    toast({
      title: "All Nodes Deleted",
      description: "All nodes deleted from the list",
      variant: "destructive",
    });
  };

  return (
    <LinkedListStateContext.Provider
      value={{ linkedList, linkedListSize, nodesHighlighted }}
    >
      <LinkedListActionsContext.Provider
        value={{
          refreshLinkedList,
          insertAtHeadNode,
          insertNodeAtIndex,
          insertNodeAtLastIndex,
          addNewNode,
          searchNodeByValue,
          updateNode,
          deleteNodeAtHead,
          deleteNodeAtPosition,
          deleteNode,
          deleteAllNodes,
        }}
      >
        {children}
      </LinkedListActionsContext.Provider>
    </LinkedListStateContext.Provider>
  );
};

const useLinkedListState = (): State => {
  const context = useContext(LinkedListStateContext);
  if (!context)
    throw new Error(
      "useLinkedListStateContext must be used within a LinkedListProvider"
    );

  return context;
};

const useLinkedListActions = (): Actions => {
  const context = useContext(LinkedListActionsContext);
  if (!context)
    throw new Error(
      "useLinkedListActionsContext must be used within a LinkedListProvider"
    );

  return context;
};

export { LinkedListProvider, useLinkedListState, useLinkedListActions };
