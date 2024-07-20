import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLinkedListActions } from "@/contexts/LinkedList";
import { SubmitHandler, useForm } from "react-hook-form";

const DeleteNodeAtIndex = () => {
  const { deleteNodeAtPosition } = useLinkedListActions();
  const { register, handleSubmit, reset } = useForm<{ pos: number }>();

  const onSubmit: SubmitHandler<{ pos: number }> = (data) => {
    const { pos } = data;

    if (pos === undefined) return;
    deleteNodeAtPosition(pos);
    reset();
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Button className="basis-1/2" type="submit">
        Delete a index
      </Button>
      <Input
        className="basis-1/2"
        type="number"
        {...register("pos")}
        placeholder="pos"
      />
    </form>
  );
};

export default DeleteNodeAtIndex;
