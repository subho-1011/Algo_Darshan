"use client";

import { Button } from "@/components/ui/button";
import { useLinkedListActions } from "@/contexts/LinkedList";

export const LLHeaderButtons = () => {
  return (
    <div className="flex w-full justify-end gap-6">
      <GenerateButton />
      <ResetButton />
    </div>
  );
};

const GenerateButton = () => {
  const { refreshLinkedList } = useLinkedListActions();

  return <Button onClick={refreshLinkedList}>New List</Button>;
};

const ResetButton = () => {
  const { refreshLinkedList } = useLinkedListActions();

  return <Button onClick={refreshLinkedList}>Reset</Button>;
};
