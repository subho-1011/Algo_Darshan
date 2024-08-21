import TreeNode from "./TreeNode";
import { TTreeNode } from "@/types";
import { TreeArrows } from "@/components";
import { useTreesState } from "@/contexts";
import { memo, useMemo } from "react";

const TreeCanvas = ({
  node,
  isRoot = false,
  isLeftChild = false,
  currentNode = null,
}: {
  node: TTreeNode | null;
  isRoot?: boolean;
  isLeftChild?: boolean;
  currentNode?: TTreeNode | null;
}) => {
  const { isSingleColor } = useTreesState();

  const variant = useMemo(() => {
    if (node?.variant === "current") return "current";
    if (isRoot && !isSingleColor) return "root";
    if (isLeftChild && !isSingleColor) return "secondary";
    return "primary";
  }, [isRoot, isLeftChild, isSingleColor, node?.variant]);

  if (!node) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-0 ">
        <TreeNode value={node.value} variant={variant} />
      </div>
      <TreeArrows node={node} isSingleColor={isSingleColor} />
      <div className="flex gap-x-6">
        <TreeCanvas node={node.left} isLeftChild />
        <TreeCanvas node={node.right} />
      </div>
    </div>
  );
};

export default memo(TreeCanvas);
