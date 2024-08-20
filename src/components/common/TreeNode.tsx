import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const nodeVariants = cva(
  "flex items-center justify-center text-white text-xl rounded-full shadow-md",
  {
    variants: {
      variant: {
        primary: "text-purple-500 bg-purple-200 ring-2 ring-purple-600",
        secondary: "text-emerald-500 bg-emerald-200 ring-2 ring-emerald-600",
        root: "text-fuchsia-500 bg-fuchsia-200 ring-2 ring-fuchsia-600",
        current:
          "text-purple-200 ring-2 ring-purple-700 bg-purple-500 scale-110",
        null: "bg-transparent shadow-none ring-0",
      },
      size: {
        default: "w-10 h-10",
        sm: "w-6 h-6 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface TreeNodeProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof nodeVariants> {
  value?: string | number | null;
}

// TreeNode component definition
const TreeNode = React.forwardRef<HTMLLabelElement, TreeNodeProps>(
  ({ value, variant, size, className, ...props }, ref) => {
    return (
      <label
        className={cn(nodeVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {value}
      </label>
    );
  }
);

TreeNode.displayName = "TreeNode";

export default TreeNode;
