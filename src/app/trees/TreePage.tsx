"use client";

import React from "react";

import { TreeCanvas } from "@/components";
import { useTreesState } from "@/contexts/Trees";
import TreeNodeCustomColor from "./TreeNodeCustomColor";

const TreesPage = () => {
  const { treeRoot } = useTreesState();

  return (
    <div className="flex-1 flex-col w-full justify-between items-start py-5 gap-y-10">
      <div className="relative flex justify-center items-start w-full ">
        <TreeNodeCustomColor />
        <TreeCanvas node={treeRoot} isRoot />
      </div>
    </div>
  );
};

export default TreesPage;
