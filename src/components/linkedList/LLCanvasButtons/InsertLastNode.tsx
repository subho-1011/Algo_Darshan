import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLinkedListActions } from "@/contexts/LinkedList";
import { SubmitHandler, useForm } from "react-hook-form";

const InsertLastNode = () => {
  const { insertNodeAtLastIndex } = useLinkedListActions();
  const { register, handleSubmit, reset } = useForm<{ value: number }>();

  const onSubmit: SubmitHandler<{ value: number }> = (data) => {
    const { value } = data;
    if (isNaN(value) || value === undefined || !value) return;

    insertNodeAtLastIndex(value);
    reset();
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Button className="basis-1/2" type="submit">
        Insert Last
      </Button>
      <Input className="basis-1/2" {...register("value")} placeholder="value" />
    </form>
  );
};

export default InsertLastNode;
