"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLinkedListActions } from "@/contexts/LinkedList";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  stringValue: string;
};

const InsertNodeAtIndex = () => {
  const { insertNodeAtIndex } = useLinkedListActions();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { stringValue } = data;

    if (!stringValue || !stringValue.trim()) return;
    const [value, position] = stringValue.split(",").map((s) => s.trim());

    insertNodeAtIndex(Number(value), Number(position));
    reset();
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Button className="basis-1/2" type="submit">
        Insert at a index
      </Button>
      <Input
        className="basis-1/2"
        {...register("stringValue")}
        placeholder="value, pos"
      />
    </form>
  );
};

export default InsertNodeAtIndex;
