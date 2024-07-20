"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLinkedListActions } from "@/contexts/LinkedList";
import { SubmitHandler, useForm } from "react-hook-form";

const InsertAtHeadNode = () => {
  const { insertAtHeadNode } = useLinkedListActions();
  const { register, handleSubmit, reset } = useForm<{ insertValue: number }>();

  const onSubmit: SubmitHandler<{ insertValue: number }> = (data) => {
    const { insertValue } = data;

    if (!insertValue || Number.isNaN(insertValue)) return;

    insertAtHeadNode(insertValue);
    reset();
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Button className="basis-1/2" type="submit">
        Insert Head
      </Button>
      <Input
        className="basis-1/2"
        type="number"
        {...register("insertValue")}
        placeholder="value"
      />
    </form>
  );
};

export default InsertAtHeadNode;
