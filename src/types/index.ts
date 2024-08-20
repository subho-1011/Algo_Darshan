type TTreeNodeVariant = "primary" | "secondary" | "root" | "current" | "null";

export type TTreeNode = {
  value: string | number | null;
  left: TTreeNode | null;
  right: TTreeNode | null;
  variant?: TTreeNodeVariant;
};
