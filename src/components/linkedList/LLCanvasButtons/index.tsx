"use client";

import AddNodeButton from "@/components/linkedList/LLCanvasButtons/InsertNodeButton";
import SearchNodeByValue from "@/components/linkedList/LLCanvasButtons/SearchNodeByValue";
import InsertAtHeadNode from "./InsertAtHeadNode";
import InsertLastNode from "./InsertLastNode";
import UpdateNode from "./UpdateNode";
import DeleteHeadNode from "./DeleteHeadNode";
import DeleteLastNode from "./DeleteLastNode";
import DeleteNodeAtIndex from "./DeleteNodeAtIndex";
import ClearListButton from "./ClearListButton";

const LLCanvasButtons = () => {
  return (
    <div className="flex flex-col gap-4">
      <InsertAtHeadNode />
      <AddNodeButton />
      <InsertLastNode />
      <SearchNodeByValue />
      <UpdateNode />
      <DeleteHeadNode />
      <DeleteNodeAtIndex />
      <DeleteLastNode />
      <ClearListButton />
      {/* <DeleteNodeButton /> */}
    </div>
  );
};

export default LLCanvasButtons;
