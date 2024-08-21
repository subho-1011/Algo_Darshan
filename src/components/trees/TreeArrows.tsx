import { cn } from "@/lib/utils";
import { TTreeNode } from "@/types";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const TreeArrows = ({
  node,
  isSingleColor,
}: {
  node: TTreeNode;
  isSingleColor?: boolean;
}) => {
  return (
    <div className="flex items-center justify-center">
      {node.left && (
        <LiaLongArrowAltDownSolid
          size={50}
          className={cn(
            isSingleColor ? "text-purple-700" : "text-emerald-600",
            node.right && "rotate-45"
          )}
        />
      )}
      {node.right && (
        <LiaLongArrowAltDownSolid
          size={50}
          className={cn("text-purple-700", node.left && "-rotate-45")}
        />
      )}
    </div>
  );
};

export default TreeArrows;
