import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLinkedListActions } from "@/contexts/LinkedList";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  pos: number;
};

const DeleteNodeButton = () => {
  const { deleteNodeAtPosition } = useLinkedListActions();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { pos } = data;

    deleteNodeAtPosition(pos);
    reset();
  };

  return (
    <div className="flex gap-2">
      <Button className="basis-1/2" type="submit">
        Delete Node
      </Button>
      <Input className="basis-1/2" {...register("pos")} />
    </div>
  );
};

export default DeleteNodeButton;
