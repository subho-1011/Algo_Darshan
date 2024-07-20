"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useLinkedListActions } from "@/contexts/LinkedList";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  value: number;
};

const SearchNodeByValue = () => {
  const { toast } = useToast();
  const { searchNodeByValue } = useLinkedListActions();
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { value } = data;

    if (isNaN(value) || value === undefined || !value) return;
    console.log(typeof value, value);
    toast({
      description: `${value} for search`,
    });

    searchNodeByValue(Number(value));
    reset();
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Button className="basis-1/2" type="submit">
        Search
      </Button>
      <Input
        className="basis-1/2"
        {...register("value")}
        type="number"
        placeholder="Value"
      />
    </form>
  );
};

export default SearchNodeByValue;
